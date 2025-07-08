import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  fullName?: string;
  avatar?: string;
  bio?: string;
  favoriteGames: mongoose.Types.ObjectId[];
  preferences: {
    genres: string[];
    platforms: string[];
    notifications: boolean;
  };
  stats: {
    gamesPlayed: number;
    hoursPlayed: number;
    achievementsUnlocked: number;
    level: number;
    experience: number;
  };
  isActive: boolean;
  lastLogin: Date;
  role: 'user' | 'admin' | 'moderator';
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters'],
    maxlength: [30, 'Username cannot exceed 30 characters'],
    match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'],
    index: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
    index: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'],
    select: false, // Don't include password in queries by default
  },
  fullName: {
    type: String,
    trim: true,
    maxlength: [100, 'Full name cannot exceed 100 characters'],
  },
  avatar: {
    type: String,
    default: '',
  },
  bio: {
    type: String,
    maxlength: [500, 'Bio cannot exceed 500 characters'],
  },
  favoriteGames: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
  }],
  preferences: {
    genres: [{
      type: String,
      enum: [
        'Action RPG', 'FPS', 'Adventure', 'Racing', 'Simulation', 
        'Fantasy RPG', 'Strategy', 'Sports', 'Puzzle', 'Horror',
        'Fighting', 'Platform', 'Survival', 'Battle Royale'
      ],
    }],
    platforms: [{
      type: String,
      enum: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile', 'VR'],
    }],
    notifications: {
      type: Boolean,
      default: true,
    },
  },
  stats: {
    gamesPlayed: {
      type: Number,
      default: 0,
    },
    hoursPlayed: {
      type: Number,
      default: 0,
    },
    achievementsUnlocked: {
      type: Number,
      default: 0,
    },
    level: {
      type: Number,
      default: 1,
    },
    experience: {
      type: Number,
      default: 0,
    },
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user',
    index: true,
  },
}, {
  timestamps: true,
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Remove password from JSON output
userSchema.methods.toJSON = function() {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

// Virtual for user level calculation
userSchema.virtual('calculatedLevel').get(function() {
  return Math.floor(this.stats.experience / 1000) + 1;
});

// Method to add experience
userSchema.methods.addExperience = function(points: number) {
  this.stats.experience += points;
  this.stats.level = Math.floor(this.stats.experience / 1000) + 1;
  return this.save();
};

export default mongoose.model<IUser>('User', userSchema);