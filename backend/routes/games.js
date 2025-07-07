const express = require('express');
const { body, validationResult, query } = require('express-validator');
const Game = require('../models/Game');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/games
// @desc    Get all games with filtering and pagination
// @access  Public
router.get('/', [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Limit must be between 1 and 50'),
  query('genre').optional().isString(),
  query('platform').optional().isString(),
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
    const filter = { isActive: true };

    if (req.query.genre) {
      filter.genre = req.query.genre;
    }

    if (req.query.platform) {
      filter.platform = { $in: [req.query.platform] };
    }

    if (req.query.search) {
      filter.$or = [
        { title: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } },
        { developer: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    // Get games with pagination
    const games = await Game.find(filter)
      .select('-reviews') // Exclude reviews for performance
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Game.countDocuments(filter);

    res.json({
      games,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalGames: total,
        hasNext: page < Math.ceil(total / limit),
        hasPrev: page > 1
      }
    });

  } catch (error) {
    console.error('Get games error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/games/featured
// @desc    Get featured games
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const featuredGames = await Game.find({
      isActive: true,
      rating: { $gte: 4.0 }
    })
    .select('-reviews')
    .sort({ rating: -1, downloadCount: -1 })
    .limit(6)
    .lean();

    res.json({ games: featuredGames });

  } catch (error) {
    console.error('Get featured games error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/games/trending
// @desc    Get trending games
// @access  Public
router.get('/trending', async (req, res) => {
  try {
    const trendingGames = await Game.find({
      isActive: true,
      createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } // Last 30 days
    })
    .select('-reviews')
    .sort({ downloadCount: -1, rating: -1 })
    .limit(8)
    .lean();

    res.json({ games: trendingGames });

  } catch (error) {
    console.error('Get trending games error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/games/:id
// @desc    Get single game by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id)
      .populate('reviews.user', 'username avatar')
      .lean();

    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    if (!game.isActive) {
      return res.status(404).json({ message: 'Game is not available' });
    }

    res.json({ game });

  } catch (error) {
    console.error('Get game error:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid game ID' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/games
// @desc    Create a new game (Admin only)
// @access  Private (Admin)
router.post('/', adminAuth, [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title cannot exceed 100 characters'),
  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
  body('genre')
    .notEmpty()
    .withMessage('Genre is required'),
  body('developer')
    .notEmpty()
    .withMessage('Developer is required'),
  body('releaseDate')
    .isISO8601()
    .withMessage('Please provide a valid release date'),
  body('price')
    .isNumeric()
    .withMessage('Price must be a number')
    .isFloat({ min: 0 })
    .withMessage('Price cannot be negative')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const game = new Game(req.body);
    await game.save();

    res.status(201).json({
      message: 'Game created successfully',
      game
    });

  } catch (error) {
    console.error('Create game error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Game with this title already exists' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/games/:id
// @desc    Update a game (Admin only)
// @access  Private (Admin)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    // Update game fields
    Object.keys(req.body).forEach(key => {
      if (req.body[key] !== undefined) {
        game[key] = req.body[key];
      }
    });

    await game.save();

    res.json({
      message: 'Game updated successfully',
      game
    });

  } catch (error) {
    console.error('Update game error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/games/:id
// @desc    Delete a game (Admin only)
// @access  Private (Admin)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    // Soft delete by setting isActive to false
    game.isActive = false;
    await game.save();

    res.json({ message: 'Game deleted successfully' });

  } catch (error) {
    console.error('Delete game error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/games/:id/review
// @desc    Add a review to a game
// @access  Private
router.post('/:id/review', auth, [
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5'),
  body('comment')
    .optional()
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

    const { rating, comment } = req.body;
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    // Check if user already reviewed this game
    const existingReview = game.reviews.find(
      review => review.user.toString() === req.user.id
    );

    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this game' });
    }

    // Add review
    game.reviews.push({
      user: req.user.id,
      rating,
      comment
    });

    await game.save();

    res.status(201).json({
      message: 'Review added successfully',
      review: game.reviews[game.reviews.length - 1]
    });

  } catch (error) {
    console.error('Add review error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/games/:id/download
// @desc    Increment download count
// @access  Public
router.post('/:id/download', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    game.downloadCount += 1;
    await game.save();

    res.json({
      message: 'Download count updated',
      downloadCount: game.downloadCount
    });

  } catch (error) {
    console.error('Update download count error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;