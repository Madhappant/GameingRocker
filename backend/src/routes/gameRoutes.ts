import express from 'express';
import { body, query } from 'express-validator';
import { GameController } from '../controllers/gameController';
import { auth, adminAuth } from '../middleware/auth';

const router = express.Router();

// Validation middleware
const gameValidation = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title cannot exceed 100 characters'),
  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 2000 })
    .withMessage('Description cannot exceed 2000 characters'),
  body('genre')
    .notEmpty()
    .withMessage('Genre is required')
    .isIn([
      'Action RPG', 'FPS', 'Adventure', 'Racing', 'Simulation', 
      'Fantasy RPG', 'Strategy', 'Sports', 'Puzzle', 'Horror',
      'Fighting', 'Platform', 'Survival', 'Battle Royale'
    ])
    .withMessage('Invalid genre'),
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
    .withMessage('Price cannot be negative'),
];

const queryValidation = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 50 })
    .withMessage('Limit must be between 1 and 50'),
  query('genre')
    .optional()
    .isString(),
  query('platform')
    .optional()
    .isString(),
  query('search')
    .optional()
    .isString(),
  query('sortBy')
    .optional()
    .isIn(['rating', 'price_low', 'price_high', 'downloads', 'release_date'])
    .withMessage('Invalid sort option'),
];

// Public routes
router.get('/', queryValidation, GameController.getAllGames);
router.get('/featured', GameController.getFeaturedGames);
router.get('/trending', GameController.getTrendingGames);
router.get('/:id', GameController.getGameById);
router.post('/:id/download', GameController.incrementDownload);

// Protected routes (Admin only)
router.post('/', adminAuth, gameValidation, GameController.createGame);
router.put('/:id', adminAuth, GameController.updateGame);
router.delete('/:id', adminAuth, GameController.deleteGame);

export default router;