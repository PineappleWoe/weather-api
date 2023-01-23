import axios from 'axios';

const getWeather = async (lat, lon) => {
  try {
    const request = await axios.get('/api/weather', {
      params: {
        lat, lon
      }
    });

    return request.data;
  } catch (error) {
    throw Error(error);
  }
};


const getForecast = async (lat, lon) => {
  try {
    const request = await axios.get('/api/forecast', {
      params: {
        lat, lon
      }
    });

    return request.data.list.filter(item => item.dt_txt.includes('12:00:00'));
  } catch (error) {
    throw Error(error);
  }
};

export {getWeather, getForecast};