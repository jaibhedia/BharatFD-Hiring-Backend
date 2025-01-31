const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const faqRoutes = require('./routes/faqRoutes');

// Load .env variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/faqs', faqRoutes);

// 404 Route Handling
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

module.exports = app;
