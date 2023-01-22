const getLocation = async (req, res) => {
    const baseURL = 'http://api.positionstack.com/v1/forward';
    const API_KEY = process.env.POSITIONSTACK_API;
    const query = req.query.query;

    try {
        const fetchResponse = await fetch(`${baseURL}?access_key=${API_KEY}&query=${query}`);
        const locationData = await fetchResponse.json(); 

        return res.json(locationData);
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

// Export Controller Functions
module.exports = { getLocation }