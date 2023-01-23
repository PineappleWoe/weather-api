// Configure Enviromental Variables
require('dotenv').config();

// Packages
const express = require('express');
const cors = require('cors');
const path = require('path');

// Set Express.js App
const app = express();

// Middlesware
app.use(cors());
app.use(express.json());
app.use(express.static('build'));

// Routers
const locationRouter = require('./routes/locationRoutes');
const weatherRouter = require('./routes/weatherRoutes');
const forecastRouter = require('./routes/forecastRoutes');

// Routes
app.use('/api/location', locationRouter);
app.use('/api/weather', weatherRouter);
app.use('/api/forecast', forecastRouter);

// Catch all other routes with ReactJS App
app.use('*', express.static(path.join(__dirname, 'build')));

// Listen
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening to PORT: ${PORT}`);
})