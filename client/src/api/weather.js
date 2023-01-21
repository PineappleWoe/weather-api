import axios from 'axios';

const getWeather = async (lat, lon) => {
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = `&appid=${process.env.REACT_APP_WEATHER_KEY}`;

  const request = axios.get(`${baseURL}?lat=${lat}&lon=${lon}${API_KEY}`);
  return request.then(response => response.data);
};


const getForecast = async (lat, lon) => {
  const baseURL = 'https://api.openweathermap.org/data/2.5/forecast';
  const API_KEY = `&appid=${process.env.REACT_APP_WEATHER_KEY}`;

  const request = axios.get(`${baseURL}?lat=${lat}&lon=${lon}${API_KEY}`);
  return request.then(response => response.data.list.filter(item => item.dt_txt.includes('12:00:00')));
};

export {getWeather, getForecast};