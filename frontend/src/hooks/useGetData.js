import { useState, useEffect } from "react";
import getAuthToken from "../util/auth";

const useGetData = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = getAuthToken();
                const headers = {
                    'Content-Type': 'application/json',
                };
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }
                const response = await fetch(url, {
                    method: 'GET',
                    headers,
                });
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};

const useFetchItems = (url) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            const token = getAuthToken();
            const headers = {
                'Content-Type': 'application/json',
            };
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
            const response = await fetch(url, {
                method: 'GET',
                headers,
            });
            const data = await response.json();
            setItems(data);
        }
        fetchItems();
    }, [url]);

    return items;
};

export default useGetData;
export { useFetchItems };