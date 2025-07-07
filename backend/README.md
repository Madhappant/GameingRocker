# Gaming Website Backend API

A comprehensive Node.js/Express backend for a gaming website with user authentication, game management, news system, and more.

## 🚀 Features

- **User Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (User/Admin)
  - Password hashing with bcrypt
  - Profile management

- **Game Management**
  - CRUD operations for games
  - Game reviews and ratings
  - Favorites system
  - Search and filtering
  - Download tracking

- **News System**
  - Article management
  - Comments and likes
  - Featured articles
  - Category-based organization

- **Contact & Newsletter**
  - Contact form handling
  - Email notifications
  - Newsletter subscription management

- **Security Features**
  - Rate limiting
  - Input validation
  - CORS protection
  - Helmet security headers

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/gaming-website
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Start MongoDB**
   ```bash
   # Using MongoDB service
   sudo systemctl start mongod
   
   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

5. **Seed the database (optional)**
   ```bash
   node utils/seedData.js
   ```

6. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/signup
Content-Type: application/json

{
  "username": "gamer123",
  "email": "user@example.com",
  "password": "password123"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <token>
```

### Games Endpoints

#### Get All Games
```http
GET /api/games?page=1&limit=10&genre=Action&search=cyberpunk
```

#### Get Single Game
```http
GET /api/games/:id
```

#### Create Game (Admin only)
```http
POST /api/games
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "title": "New Game",
  "description": "Game description",
  "genre": "Action",
  "platform": ["PC", "PlayStation"],
  "developer": "Studio Name",
  "releaseDate": "2024-01-01",
  "price": 59.99
}
```

#### Add Game Review
```http
POST /api/games/:id/review
Authorization: Bearer <token>
Content-Type: application/json

{
  "rating": 5,
  "comment": "Great game!"
}
```

### News Endpoints

#### Get All News
```http
GET /api/news?page=1&limit=10&category=Reviews
```

#### Get Single News Article
```http
GET /api/news/:id
```

#### Create News Article (Admin only)
```http
POST /api/news
Authorization: Bearer <admin-token>
Content-Type: application/json

{
  "title": "News Title",
  "content": "Article content...",
  "category": "Game Release",
  "tags": ["gaming", "news"]
}
```

### Contact Endpoints

#### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "Your message here..."
}
```

### Newsletter Endpoints

#### Subscribe to Newsletter
```http
POST /api/newsletter/subscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

#### Unsubscribe from Newsletter
```http
POST /api/newsletter/unsubscribe
Content-Type: application/json

{
  "email": "user@example.com"
}
```

### User Management Endpoints

#### Get User Profile
```http
GET /api/users/profile
Authorization: Bearer <token>
```

#### Update User Profile
```http
PUT /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "fullName": "John Doe",
  "bio": "Gaming enthusiast",
  "interests": ["Action", "RPG"]
}
```

#### Add/Remove Favorite Game
```http
POST /api/users/favorites/:gameId
Authorization: Bearer <token>
```

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 🛡️ Security Features

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: All inputs are validated using express-validator
- **Password Hashing**: Passwords are hashed using bcrypt with salt rounds of 12
- **CORS**: Configured to allow requests from frontend domain only
- **Helmet**: Security headers for protection against common vulnerabilities

## 📊 Database Schema

### User Model
```javascript
{
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  fullName: String,
  bio: String,
  avatar: String,
  interests: [String],
  favoriteGames: [ObjectId],
  isActive: Boolean,
  lastLogin: Date,
  role: String (user/admin)
}
```

### Game Model
```javascript
{
  title: String,
  description: String,
  genre: String,
  platform: [String],
  developer: String,
  publisher: String,
  releaseDate: Date,
  price: Number,
  rating: Number,
  images: [Object],
  features: [String],
  tags: [String],
  downloadCount: Number,
  reviews: [Object]
}
```

### News Model
```javascript
{
  title: String,
  content: String,
  excerpt: String,
  author: ObjectId,
  category: String,
  tags: [String],
  featuredImage: Object,
  readTime: Number,
  isPublished: Boolean,
  isFeatured: Boolean,
  views: Number,
  likes: [Object],
  comments: [Object]
}
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

## 📝 Error Handling

The API returns consistent error responses:

```json
{
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Please enter a valid email"
    }
  ]
}
```

## 🚀 Deployment

### Using PM2 (Recommended)

1. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```

2. Start the application:
   ```bash
   pm2 start server.js --name "gaming-api"
   ```

3. Save PM2 configuration:
   ```bash
   pm2 save
   pm2 startup
   ```

### Using Docker

1. Build the image:
   ```bash
   docker build -t gaming-api .
   ```

2. Run the container:
   ```bash
   docker run -d -p 5000:5000 --name gaming-api gaming-api
   ```

## 📈 Monitoring

- Health check endpoint: `GET /api/health`
- Logs are written to console (use PM2 or Docker for log management)
- Monitor MongoDB connection status

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@gamerealm.com or create an issue in the repository.