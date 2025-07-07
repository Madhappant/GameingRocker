#!/bin/bash

# Install Dependencies Script
# Installs all required dependencies for the gaming website

echo "📦 Installing Gaming Website Dependencies"
echo "========================================"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed!"
    print_info "Please install Node.js 14+ from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node --version)
print_status "Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed!"
    exit 1
fi

NPM_VERSION=$(npm --version)
print_status "npm version: $NPM_VERSION"

# Install frontend dependencies
print_info "Installing frontend dependencies..."
npm install

if [ $? -eq 0 ]; then
    print_status "Frontend dependencies installed successfully"
else
    print_error "Failed to install frontend dependencies"
    exit 1
fi

# Install backend dependencies
print_info "Installing backend dependencies..."

# Create backend directory if it doesn't exist
if [ ! -d "backend" ]; then
    mkdir backend
    print_status "Created backend directory"
fi

cd backend

# Install backend dependencies
npm install express mongoose bcryptjs jsonwebtoken cors dotenv express-validator multer cloudinary nodemailer helmet express-rate-limit compression morgan

# Install dev dependencies
npm install --save-dev nodemon jest supertest

if [ $? -eq 0 ]; then
    print_status "Backend dependencies installed successfully"
else
    print_error "Failed to install backend dependencies"
    exit 1
fi

cd ..

# Install global dependencies (optional but recommended)
print_info "Installing recommended global packages..."

# Install PM2 for production deployment
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    print_status "PM2 installed globally"
else
    print_warning "PM2 already installed"
fi

# Install nodemon globally for development
if ! command -v nodemon &> /dev/null; then
    npm install -g nodemon
    print_status "Nodemon installed globally"
else
    print_warning "Nodemon already installed"
fi

print_status "🎉 All dependencies installed successfully!"
echo ""
print_info "Next steps:"
echo "1. Run './setup-backend.sh' to set up the backend"
echo "2. Run './quick-start.sh' to start both frontend and backend"
echo ""
print_warning "Note: You may need to install MongoDB separately"
print_info "MongoDB installation: https://docs.mongodb.com/manual/installation/"