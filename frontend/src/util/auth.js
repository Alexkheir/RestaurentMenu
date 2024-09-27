import { redirect } from 'react-router-dom';

export default function getAuthToken() {
    const token = localStorage.getItem('token');
    return token;
}

export async function loader() {
    const token = getAuthToken();
    if (!token || token === "undefined") {
        return redirect('/auth');
    }

    try {
        const response = await fetch('http://localhost:8080/auth/validate-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Token validation failed');
        }

        return token;
    } catch (error) {
        console.error('Token validation error:', error);
        return redirect('/auth');
    }
}