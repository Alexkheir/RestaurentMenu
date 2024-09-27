import { useState } from "react";
import getAuthToken from "../util/auth";

const useSubmitForm = (url, navigateOnSuccess = null) => {
    const [actionStatus, setActionStatus] = useState(null);

    const handleSubmit = async (e, formData, id = null) => {
        e.preventDefault();
        const token = getAuthToken();
        const data = new FormData();
        if (id) {
            data.append('id', id);
        }
        
        for (const key in formData) {
            data.append(key, formData[key]);
            console.log(key, formData[key]);
        }
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            });

            if (response.ok) {
                setActionStatus({ success: true });
                if (navigateOnSuccess) {
                    navigateOnSuccess();
                }
            } else {
                setActionStatus({ success: false, error: 'Failed to process request' });
            }
        } catch (error) {
            setActionStatus({ success: false, error: 'Error processing request' });
        }
    };

    return { actionStatus, handleSubmit };
};

export default useSubmitForm;