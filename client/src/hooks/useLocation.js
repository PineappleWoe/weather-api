import { useState, useEffect } from 'react';

// Hooks
import useError from './useError';

// Context
import getLocation from '../api/location';

const useLocation = (query) => {
  const [location, setLocation] = useState([]);
  const { error, showError } = useError();

  useEffect(() => {
    getLocation(query)
      .then(response => setLocation(response.data))
      .catch((err) => showError(err));
  }, [query]);

  return { location, error };
};

export default useLocation;