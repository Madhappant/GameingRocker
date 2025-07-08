import mongoose, { Document, Schema } from 'mongoose';

export interface IGame extends Document {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  developer: string;
  publisher?: string;
  releaseDate: Date;
  price: number;
  rating: number;
  images: {
    url: string;
    alt: string;
  }[];
  trailer?: string;
  features: string[];
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  };
  tags: string[];
  isActive: boolean;
  downloadCount: number;
  playerCount: string;
  createdAt: Date;
  updatedAt: Date;
}

const gameSchema = new Schema<IGame>({
  title: {
    type: String,
    required: [true, 'Game title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters'],
    index: true,
  },
  description: {
    type: String,
    required: [true, 'Game description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters'],
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    enum: [
      'Action RPG', 'FPS', 'Adventure', 'Racing', 'Simulation', 
      'Fantasy RPG', 'Strategy', 'Sports', 'Puzzle', 'Horror',
      'Fighting', 'Platform', 'Survival', 'Battle Royale'
    ],
    index: true,
  },
  platform: [{
    type: String,
    enum: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile', 'VR'],
  }],
  developer: {
    type: String,
    required: [true, 'Developer is required'],
    trim: true,
    index: true,
  },
  publisher: {
    type: String,
    trim: true,
  },
  releaseDate: {
    type: Date,
    required: [true, 'Release date is required'],
    index: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative'],
  },
  rating: {
    type: Number,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot be more than 5'],
    default: 0,
    index: true,
  },
  images: [{
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  }],
  trailer: {
    type: String,
    match: [/^https?:\/\/.+/, 'Please enter a valid URL'],
  },
  features: [String],
  systemRequirements: {
    minimum: {
      os: String,
      processor: String,
      memory: String,
      graphics: String,
      storage: String,
    },
    recommended: {
      os: String,
      processor: String,
      memory: String,
      graphics: String,
      storage: String,
    },
  },
  tags: [String],
  isActive: {
    type: Boolean,
    default: true,
    index: true,
  },
  downloadCount: {
    type: Number,
    default: 0,
    index: true,
  },
  playerCount: {
    type: String,
    default: '0',
  },
}, {
  timestamps: true,
});

// Indexes for better query performance
gameSchema.index({ title: 'text', description: 'text', tags: 'text' });
gameSchema.index({ genre: 1, rating: -1 });
gameSchema.index({ releaseDate: -1 });
gameSchema.index({ downloadCount: -1 });

// Virtual for formatted price
gameSchema.virtual('formattedPrice').get(function() {
  return `$${this.price.toFixed(2)}`;
});

// Method to increment download count
gameSchema.methods.incrementDownload = function() {
  this.downloadCount += 1;
  return this.save();
};

export default mongoose.model<IGame>('Game', gameSchema);