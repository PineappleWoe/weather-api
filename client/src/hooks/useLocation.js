import { useState, useEffect } from 'react';

// Context
import getLocation from '../api/location';

const useLocation = (query = 'London') => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    getLocation(query)
      .then(response => setLocation(response.data))
      .catch(err => console.log(err));
  }, [query]);

  return location;
};

export default useLocation;