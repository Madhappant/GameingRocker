#!/bin/bash

# Quick Start Script for Gaming Website
# This script starts both frontend and backend

echo "🎮 Gaming Website Quick Start"
echo "============================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Function to check if port is in use
check_port() {
    if lsof -Pi :$1 -sTCP:LISTEN -t >/dev/null ; then
        return 0
    else
        return 1
    fi
}

# Check if backend is already running
if check_port 5000; then
    print_warning "Backend is already running on port 5000"
else
    print_info "Starting backend server..."
    
    # Start backend in background
    cd backend 2>/dev/null || {
        print_warning "Backend directory not found. Running setup first..."
        chmod +x setup-backend.sh
        ./setup-backend.sh
        cd backend
    }
    
    # Start backend
    npm run dev &
    BACKEND_PID=$!
    
    print_status "Backend started (PID: $BACKEND_PID)"
    
    # Wait for backend to start
    sleep 5
fi

# Check if frontend is already running
if check_port 3000; then
    print_warning "Frontend is already running on port 3000"
else
    print_info "Starting frontend server..."
    
    # Go back to root and start frontend
    cd ..
    
    # Install frontend dependencies if needed
    if [ ! -d "node_modules" ]; then
        print_info "Installing frontend dependencies..."
        npm install
    fi
    
    # Start frontend
    npm start &
    FRONTEND_PID=$!
    
    print_status "Frontend started (PID: $FRONTEND_PID)"
fi

# Wait a moment for servers to fully start
sleep 3

print_status "🚀 Gaming Website is now running!"
echo ""
print_info "📱 Frontend: http://localhost:3000"
print_info "🔧 Backend API: http://localhost:5000"
print_info "📊 API Health: http://localhost:5000/api/health"
echo ""
print_info "🔑 Admin Login:"
echo "   Email: admin@gamerealm.com"
echo "   Password: admin123"
echo ""
print_warning "Press Ctrl+C to stop all servers"

# Keep script running and handle Ctrl+C
trap 'echo -e "\n🛑 Stopping servers..."; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; exit' INT

# Wait indefinitely
while true; do
    sleep 1
done