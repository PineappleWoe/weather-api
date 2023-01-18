import { useState, useEffect } from 'react';

// Context
import { getLocation } from '../../api/location.js';

export const useLocation = (query) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocation(query)
      .then(response => setLocations(response.data))
      .catch(err => console.log(err));
  }, [query]);

  return locations;
};