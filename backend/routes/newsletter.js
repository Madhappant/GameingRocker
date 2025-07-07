const express = require('express');
const { body, validationResult } = require('express-validator');
const Newsletter = require('../models/Newsletter');
const { adminAuth } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/newsletter/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post('/subscribe', [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email } = req.body;

    // Check if email already exists
    let subscriber = await Newsletter.findOne({ email });

    if (subscriber) {
      if (subscriber.isActive) {
        return res.status(400).json({
          message: 'Email is already subscribed to our newsletter'
        });
      } else {
        // Reactivate subscription
        subscriber.isActive = true;
        subscriber.subscribedAt = new Date();
        subscriber.unsubscribedAt = undefined;
        await subscriber.save();

        return res.json({
          message: 'Welcome back! Your subscription has been reactivated.',
          subscriber: { email: subscriber.email, subscribedAt: subscriber.subscribedAt }
        });
      }
    }

    // Create new subscription
    subscriber = new Newsletter({
      email,
      source: req.body.source || 'website'
    });

    await subscriber.save();

    res.status(201).json({
      message: 'Successfully subscribed to newsletter!',
      subscriber: { email: subscriber.email, subscribedAt: subscriber.subscribedAt }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// @route   POST /api/newsletter/unsubscribe
// @desc    Unsubscribe from newsletter
// @access  Public
router.post('/unsubscribe', [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email')
    .normalizeEmail()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email } = req.body;

    const subscriber = await Newsletter.findOne({ email });

    if (!subscriber) {
      return res.status(404).json({
        message: 'Email not found in our newsletter list'
      });
    }

    if (!subscriber.isActive) {
      return res.status(400).json({
        message: 'Email is already unsubscribed'
      });
    }

    // Deactivate subscription
    subscriber.isActive = false;
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();

    res.json({
      message: 'Successfully unsubscribed from newsletter'
    });

  } catch (error) {
    console.error('Newsletter unsubscription error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// @route   GET /api/newsletter/subscribers
// @desc    Get all newsletter subscribers (Admin only)
// @access  Private (Admin)
router.get('/subscribers', adminAuth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const status = req.query.status; // 'active', 'inactive', or undefined for all

    // Build filter
    const filter = {};
    if (status === 'active') {
      filter.isActive = true;
    } else if (status === 'inactive') {
      filter.isActive = false;
    }

    const subscribers = await Newsletter.find(filter)
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Newsletter.countDocuments(filter);
    const activeCount = await Newsletter.countDocuments({ isActive: true });
    const inactiveCount = await Newsletter.countDocuments({ isActive: false });

    res.json({
      subscribers,
      stats: {
        total,
        active: activeCount,
        inactive: inactiveCount
      },
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalSubscribers: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    });

  } catch (error) {
    console.error('Get subscribers error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/newsletter/subscribers/:id
// @desc    Delete newsletter subscriber (Admin only)
// @access  Private (Admin)
router.delete('/subscribers/:id', adminAuth, async (req, res) => {
  try {
    const subscriber = await Newsletter.findById(req.params.id);
    
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }

    await Newsletter.findByIdAndDelete(req.params.id);

    res.json({ message: 'Subscriber deleted successfully' });

  } catch (error) {
    console.error('Delete subscriber error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/newsletter/stats
// @desc    Get newsletter statistics (Admin only)
// @access  Private (Admin)
router.get('/stats', adminAuth, async (req, res) => {
  try {
    const totalSubscribers = await Newsletter.countDocuments();
    const activeSubscribers = await Newsletter.countDocuments({ isActive: true });
    const inactiveSubscribers = await Newsletter.countDocuments({ isActive: false });

    // Get subscription trends (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const recentSubscriptions = await Newsletter.countDocuments({
      subscribedAt: { $gte: thirtyDaysAgo }
    });

    // Get monthly subscription data for chart
    const monthlyData = await Newsletter.aggregate([
      {
        $match: {
          subscribedAt: { $gte: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$subscribedAt' },
            month: { $month: '$subscribedAt' }
          },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.year': 1, '_id.month': 1 }
      }
    ]);

    res.json({
      stats: {
        total: totalSubscribers,
        active: activeSubscribers,
        inactive: inactiveSubscribers,
        recentSubscriptions,
        growthRate: totalSubscribers > 0 ? ((recentSubscriptions / totalSubscribers) * 100).toFixed(2) : 0
      },
      monthlyData
    });

  } catch (error) {
    console.error('Get newsletter stats error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;