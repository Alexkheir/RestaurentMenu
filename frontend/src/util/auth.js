import { redirect } from 'react-router-dom';

export default function getAuthToken() {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Debugging log
    return token;
}

export function loader() {
    const token = getAuthToken();
    if (!token || token === "undefined") {
        console.log('No token found, redirecting to home'); // Debugging log
        return redirect('/auth');
    }
    console.log('Token found, access granted'); // Debugging log
    return token;
}