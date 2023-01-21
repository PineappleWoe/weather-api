// Packages
const express = require('express');

// Set Router
const router = express.Router();

// Controller Functions
const { getLocation } = require('../controllers/locationController');

// Routes
router.get('/', getLocation);

// Export Router
module.exports = router;