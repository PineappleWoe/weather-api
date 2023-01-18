import axios from 'axios';

const baseURL = 'http://api.positionstack.com/v1/forward';
const API_KEY = `?access_key=${process.env.REACT_APP_LOCATION_KEY}`;

const getLocation = async (query) => {
  const request = axios.get(`${baseURL}${API_KEY}&query=${query}`);
  
  return request.then(response => response.data);
};

export default getLocation;