const getWeather = async (req, res) => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = process.env.OPENWEATHERMAP_API;
    const { lat, lon } = req.query;

    try {
        const fetchResponse = await fetch(`${baseURL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const weatherData = await fetchResponse.json(); 

        return res.json(weatherData);
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

// Export Controller Functions
module.exports = { getWeather }