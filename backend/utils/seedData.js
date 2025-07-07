const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Game = require('../models/Game');
const News = require('../models/News');
require('dotenv').config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gaming-website');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Game.deleteMany({});
    await News.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const admin = new User({
      username: 'admin',
      email: 'admin@gamerealm.com',
      password: adminPassword,
      fullName: 'Admin User',
      role: 'admin',
      bio: 'System Administrator'
    });
    await admin.save();

    // Create sample users
    const users = [];
    for (let i = 1; i <= 5; i++) {
      const password = await bcrypt.hash('password123', 12);
      const user = new User({
        username: `user${i}`,
        email: `user${i}@example.com`,
        password: password,
        fullName: `User ${i}`,
        bio: `Gaming enthusiast ${i}`,
        interests: ['Action', 'Adventure', 'RPG'].slice(0, Math.floor(Math.random() * 3) + 1)
      });
      users.push(user);
    }
    await User.insertMany(users);

    // Create sample games
    const games = [
      {
        title: 'Cyberpunk 2077',
        description: 'Experience the ultimate cyberpunk adventure in Night City.',
        genre: 'RPG',
        platform: ['PC', 'PlayStation', 'Xbox'],
        developer: 'CD Projekt RED',
        publisher: 'CD Projekt',
        releaseDate: new Date('2020-12-10'),
        price: 59.99,
        rating: 4.2,
        images: [{
          url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifz-U0Jtc-USAE93oVGTKxEdaHRRm8YPRX6fWHX4LGwq3maDc6U_DtZAH7ncib2MlWGaLjQogP9rvRyZ83mHbsAVFdpUn4veR-POgrnIdxRNpyT5spDgMg81ifr8aBisKgSsYcr_2DFEbek0GbTj9jaAgjNaFop6B0pOH1RdYJ17zxhQYeoifB5Iv2ThY/s460/cyberpunk-2077-ultimate-pc-cover.jpg',
          alt: 'Cyberpunk 2077 Cover'
        }],
        features: ['Open World', 'Character Customization', 'Ray Tracing'],
        tags: ['cyberpunk', 'futuristic', 'open-world'],
        downloadCount: 15000
      },
      {
        title: 'Elder Slayer',
        description: 'A dark fantasy action game with brutal combat.',
        genre: 'Action',
        platform: ['PC', 'PlayStation'],
        developer: 'Hyperstrange',
        publisher: 'Hyperstrange',
        releaseDate: new Date('2021-06-15'),
        price: 29.99,
        rating: 4.0,
        images: [{
          url: 'https://1.bp.blogspot.com/-ZDLJ2dsSmqQ/YQ_wMKs9FQI/AAAAAAABM-s/pJQ8ry6H4VUgWdZnHlbzapu4CnoNVuXlACLcBGAsYHQ/s460/elderborn-pc-cover.jpg',
          alt: 'Elder Slayer Cover'
        }],
        features: ['Brutal Combat', 'Dark Fantasy', 'Boss Battles'],
        tags: ['action', 'fantasy', 'combat'],
        downloadCount: 8500
      },
      {
        title: 'Speed Horizon',
        description: 'High-speed racing across beautiful landscapes.',
        genre: 'Racing',
        platform: ['PC', 'Xbox', 'PlayStation'],
        developer: 'Playground Games',
        publisher: 'Microsoft Studios',
        releaseDate: new Date('2021-11-09'),
        price: 49.99,
        rating: 4.6,
        images: [{
          url: 'https://1.bp.blogspot.com/-akhrT_x4QuA/XVG4g0O-gLI/AAAAAAAA4A0/LtDPq1HDplo_c2N-ccffnnkEX9xHn-i1QCLcBGAs/s1600/forza-horizon-4-pc-cover-www.ovagames.com.jpg',
          alt: 'Speed Horizon Cover'
        }],
        features: ['Open World Racing', 'Car Customization', 'Multiplayer'],
        tags: ['racing', 'cars', 'open-world'],
        downloadCount: 22000
      },
      {
        title: 'Titan Siege',
        description: 'Tactical team-based shooter with strategic gameplay.',
        genre: 'FPS',
        platform: ['PC', 'PlayStation', 'Xbox'],
        developer: 'Ubisoft Montreal',
        publisher: 'Ubisoft',
        releaseDate: new Date('2015-12-01'),
        price: 19.99,
        rating: 4.4,
        images: [{
          url: 'https://1.bp.blogspot.com/-acDWgnQQtOQ/Yee6gspz58I/AAAAAAAAAag/ktKqeGxPXScCubHc59jcmtVSZGlCf2GzwCNcBGAsYHQ/s460/tom-clancys-rainbow-six-siege-pc-cover.jpg',
          alt: 'Titan Siege Cover'
        }],
        features: ['Tactical Gameplay', 'Team-based', 'Destructible Environment'],
        tags: ['fps', 'tactical', 'multiplayer'],
        downloadCount: 35000
      },
      {
        title: 'Mystic Harvest',
        description: 'A magical farming and adventure simulation.',
        genre: 'Simulation',
        platform: ['PC', 'Nintendo Switch'],
        developer: 'Indie Studios',
        publisher: 'Indie Studios',
        releaseDate: new Date('2022-03-15'),
        price: 24.99,
        rating: 4.3,
        images: [{
          url: 'https://1.bp.blogspot.com/-BdQLOOqkjto/Y93oIvW4ydI/AAAAAAABV0Q/5ByefECxfzUkyIv0AeOaoH69WJx6qbKRQCNcBGAsYHQ/s460/spellforce-conquest-of-eo-pc-cover.jpg',
          alt: 'Mystic Harvest Cover'
        }],
        features: ['Farming Simulation', 'Magic System', 'Crafting'],
        tags: ['simulation', 'farming', 'magic'],
        downloadCount: 12000
      },
      {
        title: 'Battle Arena',
        description: 'Competitive MOBA with strategic team battles.',
        genre: 'MOBA',
        platform: ['PC'],
        developer: 'Arena Games',
        publisher: 'Arena Games',
        releaseDate: new Date('2023-01-20'),
        price: 0, // Free to play
        rating: 4.1,
        images: [{
          url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
          alt: 'Battle Arena Cover'
        }],
        features: ['5v5 Battles', 'Multiple Heroes', 'Ranked Matches'],
        tags: ['moba', 'competitive', 'strategy'],
        downloadCount: 45000
      }
    ];

    const savedGames = await Game.insertMany(games);

    // Create sample news articles
    const newsArticles = [
      {
        title: 'Cyberpunk 2077 Receives Major Update with New Features',
        content: 'CD Projekt RED has released a massive update for Cyberpunk 2077, bringing new gameplay features, improved AI, and enhanced graphics. The update includes new missions, character customization options, and performance improvements across all platforms.',
        excerpt: 'Major update brings new features and improvements to the popular RPG.',
        author: admin._id,
        category: 'Game Release',
        tags: ['cyberpunk', 'update', 'rpg'],
        featuredImage: {
          url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
          alt: 'Cyberpunk 2077 Update'
        },
        readTime: 5,
        isPublished: true,
        isFeatured: true,
        views: 1250
      },
      {
        title: 'The Rise of Indie Gaming: Small Studios Making Big Impact',
        content: 'Independent game developers are creating some of the most innovative and engaging games in the industry. From unique art styles to experimental gameplay mechanics, indie games are pushing the boundaries of what gaming can be.',
        excerpt: 'Exploring how independent developers are changing the gaming landscape.',
        author: admin._id,
        category: 'Industry News',
        tags: ['indie', 'gaming', 'industry'],
        featuredImage: {
          url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
          alt: 'Indie Gaming'
        },
        readTime: 8,
        isPublished: true,
        isFeatured: false,
        views: 890
      },
      {
        title: 'Gaming Hardware Trends: What to Expect in 2024',
        content: 'The gaming hardware industry continues to evolve with new graphics cards, processors, and gaming peripherals. This article explores the latest trends and what gamers can expect in the coming year.',
        excerpt: 'A look at the latest gaming hardware trends and future expectations.',
        author: admin._id,
        category: 'Reviews',
        tags: ['hardware', 'technology', 'gaming'],
        featuredImage: {
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
          alt: 'Gaming Hardware'
        },
        readTime: 6,
        isPublished: true,
        isFeatured: true,
        views: 2100
      }
    ];

    await News.insertMany(newsArticles);

    console.log('✅ Sample data seeded successfully!');
    console.log('Admin credentials: admin@gamerealm.com / admin123');
    console.log('User credentials: user1@example.com / password123 (and user2-5)');

  } catch (error) {
    console.error('❌ Error seeding data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

// Run the seed function
if (require.main === module) {
  seedData();
}

module.exports = seedData;