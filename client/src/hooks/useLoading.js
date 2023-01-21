import { useState, useEffect } from 'react';

const useLoading = (isLoading) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  return loading;
};

export default useLoading;