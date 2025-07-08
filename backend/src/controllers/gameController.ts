import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Game from '../models/Game';
import { ApiResponse } from '../types/apiResponse';

export class GameController {
  // Get all games with filtering and pagination
  static async getAllGames(req: Request, res: Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array(),
        } as ApiResponse);
        return;
      }

      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 12;
      const skip = (page - 1) * limit;

      // Build filter object
      const filter: any = { isActive: true };

      if (req.query.genre) {
        filter.genre = req.query.genre;
      }

      if (req.query.platform) {
        filter.platform = { $in: [req.query.platform] };
      }

      if (req.query.search) {
        filter.$text = { $search: req.query.search as string };
      }

      if (req.query.minPrice || req.query.maxPrice) {
        filter.price = {};
        if (req.query.minPrice) filter.price.$gte = parseFloat(req.query.minPrice as string);
        if (req.query.maxPrice) filter.price.$lte = parseFloat(req.query.maxPrice as string);
      }

      // Sort options
      let sortOption: any = { createdAt: -1 };
      switch (req.query.sortBy) {
        case 'rating':
          sortOption = { rating: -1 };
          break;
        case 'price_low':
          sortOption = { price: 1 };
          break;
        case 'price_high':
          sortOption = { price: -1 };
          break;
        case 'downloads':
          sortOption = { downloadCount: -1 };
          break;
        case 'release_date':
          sortOption = { releaseDate: -1 };
          break;
      }

      const games = await Game.find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(limit)
        .select('-systemRequirements')
        .lean();

      const total = await Game.countDocuments(filter);

      res.json({
        success: true,
        data: {
          games,
          pagination: {
            currentPage: page,
            totalPages: Math.ceil(total / limit),
            totalGames: total,
            hasNext: page < Math.ceil(total / limit),
            hasPrev: page > 1,
          },
        },
      } as ApiResponse);
    } catch (error) {
      console.error('Get games error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching games',
      } as ApiResponse);
    }
  }

  // Get featured games
  static async getFeaturedGames(req: Request, res: Response): Promise<void> {
    try {
      const limit = parseInt(req.query.limit as string) || 6;

      const featuredGames = await Game.find({
        isActive: true,
        rating: { $gte: 4.0 },
      })
        .sort({ rating: -1, downloadCount: -1 })
        .limit(limit)
        .select('-systemRequirements')
        .lean();

      res.json({
        success: true,
        data: featuredGames,
      } as ApiResponse);
    } catch (error) {
      console.error('Get featured games error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching featured games',
      } as ApiResponse);
    }
  }

  // Get trending games
  static async getTrendingGames(req: Request, res: Response): Promise<void> {
    try {
      const limit = parseInt(req.query.limit as string) || 8;
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

      const trendingGames = await Game.find({
        isActive: true,
        createdAt: { $gte: thirtyDaysAgo },
      })
        .sort({ downloadCount: -1, rating: -1 })
        .limit(limit)
        .select('-systemRequirements')
        .lean();

      res.json({
        success: true,
        data: trendingGames,
      } as ApiResponse);
    } catch (error) {
      console.error('Get trending games error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while fetching trending games',
      } as ApiResponse);
    }
  }

  // Get single game by ID
  static async getGameById(req: Request, res: Response): Promise<void> {
    try {
      const game = await Game.findById(req.params.id)
        .populate('reviews.user', 'username avatar')
        .lean();

      if (!game) {
        res.status(404).json({
          success: false,
          message: 'Game not found',
        } as ApiResponse);
        return;
      }

      if (!game.isActive) {
        res.status(404).json({
          success: false,
          message: 'Game is not available',
        } as ApiResponse);
        return;
      }

      res.json({
        success: true,
        data: game,
      } as ApiResponse);
    } catch (error) {
      console.error('Get game error:', error);
      if ((error as any).name === 'CastError') {
        res.status(400).json({
          success: false,
          message: 'Invalid game ID',
        } as ApiResponse);
        return;
      }
      res.status(500).json({
        success: false,
        message: 'Server error while fetching game',
      } as ApiResponse);
    }
  }

  // Create a new game (Admin only)
  static async createGame(req: Request, res: Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array(),
        } as ApiResponse);
        return;
      }

      const game = new Game(req.body);
      await game.save();

      res.status(201).json({
        success: true,
        message: 'Game created successfully',
        data: game,
      } as ApiResponse);
    } catch (error) {
      console.error('Create game error:', error);
      if ((error as any).code === 11000) {
        res.status(400).json({
          success: false,
          message: 'Game with this title already exists',
        } as ApiResponse);
        return;
      }
      res.status(500).json({
        success: false,
        message: 'Server error while creating game',
      } as ApiResponse);
    }
  }

  // Update a game (Admin only)
  static async updateGame(req: Request, res: Response): Promise<void> {
    try {
      const game = await Game.findById(req.params.id);

      if (!game) {
        res.status(404).json({
          success: false,
          message: 'Game not found',
        } as ApiResponse);
        return;
      }

      Object.keys(req.body).forEach(key => {
        if (req.body[key] !== undefined) {
          (game as any)[key] = req.body[key];
        }
      });

      await game.save();

      res.json({
        success: true,
        message: 'Game updated successfully',
        data: game,
      } as ApiResponse);
    } catch (error) {
      console.error('Update game error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while updating game',
      } as ApiResponse);
    }
  }

  // Delete a game (Admin only)
  static async deleteGame(req: Request, res: Response): Promise<void> {
    try {
      const game = await Game.findById(req.params.id);

      if (!game) {
        res.status(404).json({
          success: false,
          message: 'Game not found',
        } as ApiResponse);
        return;
      }

      // Soft delete by setting isActive to false
      game.isActive = false;
      await game.save();

      res.json({
        success: true,
        message: 'Game deleted successfully',
      } as ApiResponse);
    } catch (error) {
      console.error('Delete game error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while deleting game',
      } as ApiResponse);
    }
  }

  // Increment download count
  static async incrementDownload(req: Request, res: Response): Promise<void> {
    try {
      const game = await Game.findById(req.params.id);

      if (!game) {
        res.status(404).json({
          success: false,
          message: 'Game not found',
        } as ApiResponse);
        return;
      }

      await game.incrementDownload();

      res.json({
        success: true,
        message: 'Download count updated',
        data: {
          downloadCount: game.downloadCount,
        },
      } as ApiResponse);
    } catch (error) {
      console.error('Update download count error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while updating download count',
      } as ApiResponse);
    }
  }
}