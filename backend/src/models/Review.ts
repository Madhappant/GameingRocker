import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  user: mongoose.Types.ObjectId;
  game: mongoose.Types.ObjectId;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  hoursPlayed?: number;
  platform: string;
  isRecommended: boolean;
  helpfulVotes: number;
  reportCount: number;
  isVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const reviewSchema = new Schema<IReview>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true,
    index: true,
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5'],
  },
  title: {
    type: String,
    required: [true, 'Review title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Review content is required'],
    minlength: [50, 'Review must be at least 50 characters'],
    maxlength: [2000, 'Review cannot exceed 2000 characters'],
  },
  pros: [{
    type: String,
    maxlength: [200, 'Pro point cannot exceed 200 characters'],
  }],
  cons: [{
    type: String,
    maxlength: [200, 'Con point cannot exceed 200 characters'],
  }],
  hoursPlayed: {
    type: Number,
    min: [0, 'Hours played cannot be negative'],
  },
  platform: {
    type: String,
    required: [true, 'Platform is required'],
    enum: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile', 'VR'],
  },
  isRecommended: {
    type: Boolean,
    required: true,
  },
  helpfulVotes: {
    type: Number,
    default: 0,
    index: true,
  },
  reportCount: {
    type: Number,
    default: 0,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true,
  },
}, {
  timestamps: true,
});

// Compound index to prevent duplicate reviews
reviewSchema.index({ user: 1, game: 1 }, { unique: true });

// Index for sorting by helpful votes
reviewSchema.index({ helpfulVotes: -1, createdAt: -1 });

// Virtual for review age
reviewSchema.virtual('age').get(function() {
  return Date.now() - this.createdAt.getTime();
});

// Method to mark as helpful
reviewSchema.methods.markHelpful = function() {
  this.helpfulVotes += 1;
  return this.save();
};

// Method to report review
reviewSchema.methods.report = function() {
  this.reportCount += 1;
  if (this.reportCount >= 5) {
    this.isActive = false;
  }
  return this.save();
};

export default mongoose.model<IReview>('Review', reviewSchema);