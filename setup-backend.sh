#!/bin/bash

# Gaming Website Backend Setup Script
# This script sets up the complete backend for the gaming website

echo "🎮 Gaming Website Backend Setup Starting..."
echo "============================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 14+ first."
    exit 1
fi

# Check if MongoDB is installed
if ! command -v mongod &> /dev/null; then
    print_warning "MongoDB is not installed. Installing MongoDB..."
    
    # Install MongoDB based on OS
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Ubuntu/Debian
        wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
        echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
        sudo apt-get update
        sudo apt-get install -y mongodb-org
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if command -v brew &> /dev/null; then
            brew tap mongodb/brew
            brew install mongodb-community
        else
            print_error "Homebrew not found. Please install MongoDB manually."
            exit 1
        fi
    else
        print_error "Unsupported OS. Please install MongoDB manually."
        exit 1
    fi
fi

# Create backend directory if it doesn't exist
if [ ! -d "backend" ]; then
    mkdir backend
    print_status "Created backend directory"
fi

cd backend

# Initialize npm if package.json doesn't exist
if [ ! -f "package.json" ]; then
    print_info "Initializing npm project..."
    npm init -y
fi

print_info "Installing backend dependencies..."

# Install production dependencies
npm install express mongoose bcryptjs jsonwebtoken cors dotenv express-validator multer cloudinary nodemailer helmet express-rate-limit compression morgan

# Install development dependencies
npm install --save-dev nodemon jest supertest

print_status "Dependencies installed successfully"

# Create directory structure
print_info "Creating directory structure..."

mkdir -p models routes middleware utils config

print_status "Directory structure created"

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    print_info "Creating .env file..."
    cat > .env << EOL
# Database
MONGODB_URI=mongodb://localhost:27017/gaming-website

# JWT
JWT_SECRET=$(openssl rand -base64 32)
JWT_EXPIRE=7d

# Server
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Email Configuration (Optional - for contact forms and newsletters)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Cloudinary (Optional - for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
EOL
    print_status ".env file created with secure JWT secret"
else
    print_warning ".env file already exists"
fi

# Start MongoDB service
print_info "Starting MongoDB service..."

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    sudo systemctl start mongod
    sudo systemctl enable mongod
elif [[ "$OSTYPE" == "darwin"* ]]; then
    brew services start mongodb/brew/mongodb-community
fi

print_status "MongoDB service started"

# Wait for MongoDB to start
sleep 3

# Check if MongoDB is running
if pgrep -x "mongod" > /dev/null; then
    print_status "MongoDB is running"
else
    print_warning "MongoDB might not be running. Trying to start with Docker..."
    
    if command -v docker &> /dev/null; then
        docker run -d -p 27017:27017 --name mongodb-gaming mongo:latest
        sleep 5
        print_status "MongoDB started with Docker"
    else
        print_error "Could not start MongoDB. Please start it manually."
    fi
fi

# Seed the database with sample data
print_info "Seeding database with sample data..."
node utils/seedData.js

print_status "Database seeded successfully"

# Create start scripts
print_info "Creating start scripts..."

# Update package.json scripts
cat > package.json << EOL
{
  "name": "gaming-website-backend",
  "version": "1.0.0",
  "description": "Backend API for Gaming Website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "seed": "node utils/seedData.js"
  },
  "keywords": ["gaming", "api", "backend", "nodejs"],
  "author": "Gaming Team",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.5.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express-validator": "^7.0.1",
    "multer": "^1.4.5-lts.1",
    "cloudinary": "^1.40.0",
    "nodemailer": "^6.9.4",
    "helmet": "^7.0.0",
    "express-rate-limit": "^6.10.0",
    "compression": "^1.7.4",
    "morgan": "^1.10.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.6.2",
    "supertest": "^6.3.3"
  }
}
EOL

print_status "Package.json updated"

# Create development start script
cat > start-dev.sh << 'EOL'
#!/bin/bash

echo "🚀 Starting Gaming Website Backend in Development Mode..."

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
    echo "Starting MongoDB..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo systemctl start mongod
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        brew services start mongodb/brew/mongodb-community
    else
        # Try Docker as fallback
        docker start mongodb-gaming 2>/dev/null || docker run -d -p 27017:27017 --name mongodb-gaming mongo:latest
    fi
    sleep 3
fi

# Start the backend server
npm run dev
EOL

chmod +x start-dev.sh

# Create production start script
cat > start-prod.sh << 'EOL'
#!/bin/bash

echo "🚀 Starting Gaming Website Backend in Production Mode..."

# Set production environment
export NODE_ENV=production

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
    echo "Starting MongoDB..."
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo systemctl start mongod
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        brew services start mongodb/brew/mongodb-community
    fi
    sleep 3
fi

# Start the backend server
npm start
EOL

chmod +x start-prod.sh

print_status "Start scripts created"

# Create PM2 ecosystem file for production deployment
cat > ecosystem.config.js << 'EOL'
module.exports = {
  apps: [{
    name: 'gaming-website-api',
    script: 'server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development',
      PORT: 5000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }]
};
EOL

# Create logs directory
mkdir -p logs

print_status "PM2 configuration created"

# Create Docker files
print_info "Creating Docker configuration..."

cat > Dockerfile << 'EOL'
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Change ownership of the app directory
RUN chown -R nodejs:nodejs /usr/src/app
USER nodejs

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:5000/api/health || exit 1

# Start the application
CMD ["npm", "start"]
EOL

cat > docker-compose.yml << 'EOL'
version: '3.8'

services:
  api:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/gaming-website
    depends_on:
      - mongo
    restart: unless-stopped

  mongo:
    image: mongo:6.0
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    restart: unless-stopped

volumes:
  mongo_data:
EOL

cat > .dockerignore << 'EOL'
node_modules
npm-debug.log
.env
.git
.gitignore
README.md
Dockerfile
.dockerignore
logs
EOL

print_status "Docker configuration created"

# Create test script
cat > test-api.sh << 'EOL'
#!/bin/bash

echo "🧪 Testing Gaming Website API..."

BASE_URL="http://localhost:5000/api"

# Test health endpoint
echo "Testing health endpoint..."
curl -s "$BASE_URL/health" | jq '.'

# Test user registration
echo -e "\nTesting user registration..."
curl -s -X POST "$BASE_URL/auth/signup" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
  }' | jq '.'

# Test user login
echo -e "\nTesting user login..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@gamerealm.com",
    "password": "admin123"
  }')

echo $LOGIN_RESPONSE | jq '.'

# Extract token
TOKEN=$(echo $LOGIN_RESPONSE | jq -r '.token')

if [ "$TOKEN" != "null" ] && [ "$TOKEN" != "" ]; then
    echo -e "\nTesting authenticated endpoint..."
    curl -s "$BASE_URL/auth/me" \
      -H "Authorization: Bearer $TOKEN" | jq '.'
    
    echo -e "\nTesting games endpoint..."
    curl -s "$BASE_URL/games?limit=3" | jq '.'
    
    echo -e "\nTesting news endpoint..."
    curl -s "$BASE_URL/news?limit=2" | jq '.'
else
    echo "❌ Could not get authentication token"
fi

echo -e "\n✅ API testing completed"
EOL

chmod +x test-api.sh

print_status "Test script created"

# Create backup script
cat > backup-db.sh << 'EOL'
#!/bin/bash

echo "📦 Creating database backup..."

# Create backup directory
mkdir -p backups

# Create timestamp
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Backup database
mongodump --db gaming-website --out "backups/backup_$TIMESTAMP"

echo "✅ Database backup created: backups/backup_$TIMESTAMP"

# Keep only last 5 backups
ls -t backups/ | tail -n +6 | xargs -I {} rm -rf backups/{}

echo "🧹 Old backups cleaned up"
EOL

chmod +x backup-db.sh

print_status "Backup script created"

# Final setup completion
echo ""
echo "============================================"
print_status "🎉 Backend setup completed successfully!"
echo "============================================"
echo ""

print_info "📋 Setup Summary:"
echo "  • Backend API server configured"
echo "  • MongoDB database setup"
echo "  • Sample data seeded"
echo "  • Development and production scripts created"
echo "  • Docker configuration ready"
echo "  • Testing and backup scripts available"
echo ""

print_info "🔑 Default Admin Credentials:"
echo "  Email: admin@gamerealm.com"
echo "  Password: admin123"
echo ""

print_info "🚀 Quick Start Commands:"
echo "  Development: ./start-dev.sh"
echo "  Production:  ./start-prod.sh"
echo "  Test API:    ./test-api.sh"
echo "  Backup DB:   ./backup-db.sh"
echo ""

print_info "📊 API Endpoints:"
echo "  Health Check: http://localhost:5000/api/health"
echo "  Games:        http://localhost:5000/api/games"
echo "  News:         http://localhost:5000/api/news"
echo "  Auth:         http://localhost:5000/api/auth"
echo ""

print_warning "⚙️  Next Steps:"
echo "  1. Update .env file with your email credentials (optional)"
echo "  2. Run './start-dev.sh' to start development server"
echo "  3. Test the API with './test-api.sh'"
echo "  4. Start your frontend application"
echo ""

print_info "📚 Documentation:"
echo "  • API docs: backend/README.md"
echo "  • Postman collection available"
echo "  • Swagger docs at: http://localhost:5000/api/docs (coming soon)"
echo ""

echo "🎮 Happy Gaming Development!"