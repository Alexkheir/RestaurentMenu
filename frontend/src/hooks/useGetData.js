import { useState, useEffect } from "react";

const useGetData = (url, id) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: id })
                });
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [url, id]);

    return { data, error };
};

const useFetchItems = (url) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            const response = await fetch(url);
            const data = await response.json();
            setItems(data);
        }
        fetchItems();
    }, [url]);

    return items;
};

export default useGetData;
export { useFetchItems };

