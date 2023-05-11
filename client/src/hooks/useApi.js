import { useState, useEffect } from 'react';
import axios from 'axios';
const useApi = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/users')
      .then((response) => setData({ users: response.data.users }))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useApi;
