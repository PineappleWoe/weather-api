// Packages
const express = require('express');

// Set Router
const router = express.Router();

// Controller Functions
const { getWeather } = require('../controllers/weatherController');

// Routes
router.get('/', getWeather);

// Export Router
module.exports = router;