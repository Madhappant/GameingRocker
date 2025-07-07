const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Game title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Game description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    enum: ['Action', 'Adventure', 'RPG', 'Strategy', 'Sports', 'Racing', 'Puzzle', 'Simulation', 'FPS', 'MOBA']
  },
  platform: [{
    type: String,
    enum: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile', 'VR']
  }],
  developer: {
    type: String,
    required: [true, 'Developer is required'],
    trim: true
  },
  publisher: {
    type: String,
    trim: true
  },
  releaseDate: {
    type: Date,
    required: [true, 'Release date is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  rating: {
    type: Number,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot be more than 5'],
    default: 0
  },
  images: [{
    url: String,
    alt: String
  }],
  trailer: {
    type: String,
    match: [/^https?:\/\/.+/, 'Please enter a valid URL']
  },
  features: [String],
  systemRequirements: {
    minimum: {
      os: String,
      processor: String,
      memory: String,
      graphics: String,
      storage: String
    },
    recommended: {
      os: String,
      processor: String,
      memory: String,
      graphics: String,
      storage: String
    }
  },
  tags: [String],
  isActive: {
    type: Boolean,
    default: true
  },
  downloadCount: {
    type: Number,
    default: 0
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
});

// Calculate average rating
gameSchema.methods.calculateAverageRating = function() {
  if (this.reviews.length === 0) return 0;
  
  const sum = this.reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / this.reviews.length).toFixed(1);
};

// Update rating before saving
gameSchema.pre('save', function(next) {
  if (this.reviews && this.reviews.length > 0) {
    this.rating = this.calculateAverageRating();
  }
  next();
});

module.exports = mongoose.model('Game', gameSchema);