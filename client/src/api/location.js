import axios from 'axios';

const getLocation = async (query) => {
  try {
    const request = await axios.get('/api/location', {
      params: {
        query: query
      }
    });

    return request.data;
  } catch (error) {
    return error;
  }
};

export default getLocation;