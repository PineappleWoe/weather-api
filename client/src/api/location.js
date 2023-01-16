import axios from 'axios';

// http://api.positionstack.com/v1/forward?access_key=YOUR_ACCESS_KEY

const baseURL = 'http://api.positionstack.com/v1/forward';
const API_KEY = `?access_key=${process.env.REACT_APP_LOCATION_KEY}`;

const getLocation = async (query) => {

    const parameter = `&query=${query}`

    const request = axios.get(`${baseURL}${API_KEY}${parameter}`);
    return request.then(response => response.data);

}

export default getLocation