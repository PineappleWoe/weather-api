import axios from 'axios';

const getLocation = async (query) => {
  const request = await axios.get('/api/location', {
    params: {
      query: query
    }
  })
    .then((response) => response.data);

  console.log(request);
  
  return request;
};

export default getLocation;