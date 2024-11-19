import { useEffect, useState } from 'react';
import fetchAndCache from '../../utils/fetchAndCache';

const useLoader = (path) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const [error, data] = await fetchAndCache(path);

      error && setError(error);
      data && setData(data);
    })();

    return () => {
      setData(null);
      setError(null);
    };
  }, [path]);

  return [error, data];
};

export default useLoader;
