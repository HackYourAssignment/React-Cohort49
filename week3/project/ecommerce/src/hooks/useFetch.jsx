import { useState, useEffect } from "react";

const useFetch = (initialUrl = null) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      setData([]);
      setError(null);

      if (typeof url === "string") {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error while fetching data.");
        }

        const data = await response.json();
        setData(data);
      } else if (Array.isArray(url)) {
        const data = await Promise.all(
          url.map(async (urlItem) => {
            const response = await fetch(urlItem);

            if (!response.ok) {
              throw new Error("Error while fetching data.");
            }

            return response.json();
          })
        );

        setData(data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(initialUrl);
  }, [initialUrl]);

  return { data, error, loading };
};

export default useFetch;
