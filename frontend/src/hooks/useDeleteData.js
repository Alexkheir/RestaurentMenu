import { useState } from "react";
import getAuthToken from "../util/auth"; // Import the function to get the token

const useDeleteData = (url) => {
    const [error, setError] = useState(null);

    const deleteData = async (id) => {
        console.log(id);
        try {
            const token = getAuthToken(); // Get the token
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({ id })
            });
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
        } catch (err) {
            setError(err);
        }
    };

    return { deleteData, error };
};

export default useDeleteData;