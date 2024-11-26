import { useState, useEffect } from "react";

function useFetch(urls) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!urls) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (Array.isArray(urls)) {
          const responses = await Promise.all(urls.map((url) => fetch(url)));
          const results = await Promise.all(responses.map((res) => res.json()));
          setData(results);
        } else {
          const response = await fetch(urls);
          if (!response.ok) throw new Error("Failed to fetch");
          const result = await response.json();
          setData(result);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [urls]);

  return { data, loading, error };
}

export default useFetch;
