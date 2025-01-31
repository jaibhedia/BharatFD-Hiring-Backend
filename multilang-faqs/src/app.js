const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const faqRoutes = require('./routes/faqRoutes');

dotenv.config();


connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/faqs', faqRoutes);


app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

module.exports = app;
