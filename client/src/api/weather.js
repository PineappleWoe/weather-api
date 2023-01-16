import axios from 'axios';

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = `&appid=${process.env.REACT_APP_WEATHER_KEY}`;

const getWeather = async (lat, lon) => {

    const request = axios.get(`${baseURL}?lat=${lat}&lon=${lon}${API_KEY}`);
    return request.then(response => response.data);

}

export default getWeather