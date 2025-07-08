import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User';

interface AuthRequest extends Request {
  user?: IUser;
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({
        success: false,
        message: 'No token provided, access denied',
      });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any;
    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      res.status(401).json({
        success: false,
        message: 'Token is not valid',
      });
      return;
    }

    if (!user.isActive) {
      res.status(401).json({
        success: false,
        message: 'Account is deactivated',
      });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(401).json({
      success: false,
      message: 'Token is not valid',
    });
  }
};

export const adminAuth = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    await auth(req, res, () => {
      if (req.user?.role !== 'admin') {
        res.status(403).json({
          success: false,
          message: 'Admin access required',
        });
        return;
      }
      next();
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Admin authentication failed',
    });
  }
};

export const moderatorAuth = async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    await auth(req, res, () => {
      if (req.user?.role !== 'admin' && req.user?.role !== 'moderator') {
        res.status(403).json({
          success: false,
          message: 'Moderator access required',
        });
        return;
      }
      next();
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Moderator authentication failed',
    });
  }
};