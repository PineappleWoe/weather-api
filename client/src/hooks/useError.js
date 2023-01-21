import { useState, useEffect } from 'react';

const useError = (initialError = null) => {
  const [error, setError] = useState(initialError);

  const showError = (message) => {
    setError(message);
  };

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      clearError();
    }, 5000);
    return () => clearTimeout(errorTimeout);
  }, [error]);

  return {error, showError, clearError};
};

export default useError;