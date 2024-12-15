import { useState, useEffect, useCallback } from "react";

const useFetch = (initialUrl, isMultipleFetch = false) => {
    const [data, setData] = useState(isMultipleFetch ? [] : null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (url) => {
        setLoading(true);
        setError(null);
        try {
        const response = await fetch(url);
        const result = await response.json();
        setData(isMultipleFetch ? (prev) => [...prev, ...result] : result);
        } catch (err) {
        setError("Failed to fetch data.");
        console.error(err);
        } finally {
        setLoading(false);
        }
    }, [isMultipleFetch]);

    useEffect(() => {
        if (initialUrl) fetchData(initialUrl);
    }, [initialUrl, fetchData]);

    return { data, loading, error, fetchData };
};

export default useFetch;
