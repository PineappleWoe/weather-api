// Packages
const express = require('express');

// Set Router
const router = express.Router();

// Controller Functions
const { getForecast } = require('../controllers/forecastController');

// Routes
router.get('/', getForecast);

// Export Router
module.exports = router;