const express = require('express');
const { body, validationResult, query } = require('express-validator');
const News = require('../models/News');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/news
// @desc    Get all published news with filtering and pagination
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 20 }).withMessage('Limit must be between 1 and 20'),
  query('category').optional().isString(),
  query('search').optional().isString()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = { isPublished: true };

    if (req.query.category) {
      filter.category = req.query.category;
    }

    if (req.query.search) {
      filter.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { content: { $regex: req.query.search, $options: 'i' } },
        { excerpt: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    // Get news with pagination
    const news = await News.find(filter)
      .populate('author', 'username avatar')
      .select('-content') // Exclude full content for list view
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await News.countDocuments(filter);

    res.json({
      news,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalNews: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    });

  } catch (error) {
    console.error('Get news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/news/featured
// @desc    Get featured news
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const featuredNews = await News.find({
      isPublished: true,
      isFeatured: true
    })
    .populate('author', 'username avatar')
    .select('-content')
    .sort({ publishedAt: -1 })
    .limit(5)
    .lean();

    res.json({ news: featuredNews });

  } catch (error) {
    console.error('Get featured news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/news/latest
// @desc    Get latest news
// @access  Public
router.get('/latest', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;
    
    const latestNews = await News.find({ isPublished: true })
      .populate('author', 'username avatar')
      .select('-content')
      .sort({ publishedAt: -1 })
      .limit(limit)
      .lean();

    res.json({ news: latestNews });

  } catch (error) {
    console.error('Get latest news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/news/:id
// @desc    Get single news article by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id)
      .populate('author', 'username avatar fullName')
      .populate('comments.user', 'username avatar')
      .lean();

    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }

    if (!news.isPublished) {
      return res.status(404).json({ message: 'News article is not published' });
    }

    // Increment views
    await News.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });

    res.json({ news });

  } catch (error) {
    console.error('Get news article error:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid news ID' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/news
// @desc    Create a new news article (Admin only)
// @access  Private (Admin)
router.post('/', adminAuth, [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 200 })
    .withMessage('Title cannot exceed 200 characters'),
  body('content')
    .notEmpty()
    .withMessage('Content is required'),
  body('category')
    .notEmpty()
    .withMessage('Category is required'),
  body('excerpt')
    .optional()
    .isLength({ max: 300 })
    .withMessage('Excerpt cannot exceed 300 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const newsData = {
      ...req.body,
      author: req.user.id
    };

    // Auto-generate excerpt if not provided
    if (!newsData.excerpt && newsData.content) {
      newsData.excerpt = newsData.content.substring(0, 200) + '...';
    }

    const news = new News(newsData);
    await news.save();

    // Populate author info
    await news.populate('author', 'username avatar');

    res.status(201).json({
      message: 'News article created successfully',
      news
    });

  } catch (error) {
    console.error('Create news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/news/:id
// @desc    Update a news article (Admin only)
// @access  Private (Admin)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    
    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }

    // Update news fields
    Object.keys(req.body).forEach(key => {
      if (req.body[key] !== undefined && key !== 'author') {
        news[key] = req.body[key];
      }
    });

    await news.save();
    await news.populate('author', 'username avatar');

    res.json({
      message: 'News article updated successfully',
      news
    });

  } catch (error) {
    console.error('Update news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/news/:id
// @desc    Delete a news article (Admin only)
// @access  Private (Admin)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    
    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }

    await News.findByIdAndDelete(req.params.id);

    res.json({ message: 'News article deleted successfully' });

  } catch (error) {
    console.error('Delete news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/news/:id/like
// @desc    Like/unlike a news article
// @access  Private
router.post('/:id/like', auth, async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }

    // Check if user already liked this article
    const existingLike = news.likes.find(
      like => like.user.toString() === req.user.id
    );

    if (existingLike) {
      // Remove like
      news.likes = news.likes.filter(
        like => like.user.toString() !== req.user.id
      );
      await news.save();

      res.json({
        message: 'Like removed',
        liked: false,
        likesCount: news.likes.length
      });
    } else {
      // Add like
      news.likes.push({ user: req.user.id });
      await news.save();

      res.json({
        message: 'Article liked',
        liked: true,
        likesCount: news.likes.length
      });
    }

  } catch (error) {
    console.error('Like news error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/news/:id/comment
// @desc    Add a comment to a news article
// @access  Private
router.post('/:id/comment', auth, [
  body('content')
    .notEmpty()
    .withMessage('Comment content is required')
    .isLength({ max: 500 })
    .withMessage('Comment cannot exceed 500 characters')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { content } = req.body;
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }

    // Add comment
    news.comments.push({
      user: req.user.id,
      content
    });

    await news.save();
    await news.populate('comments.user', 'username avatar');

    const newComment = news.comments[news.comments.length - 1];

    res.status(201).json({
      message: 'Comment added successfully',
      comment: newComment
    });

  } catch (error) {
    console.error('Add comment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;