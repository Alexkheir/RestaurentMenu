import LoginForm from "../components/adminLogin/loginForm";
import { redirect, json } from "react-router-dom"; 

function LoginFormPage(){
    return(
            <LoginForm />
    )
}

export default LoginFormPage;



export const action = async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    
    try {
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });
        if(response.status===401){
            return json({ message: 'Invalid email' }, { status: 401 });
        }
        if(response.status===400){
            return json({ message: 'Incorrect password' }, { status: 400 });
        }

        if (!response.ok) {
            throw json({ message: 'Could not login admin.' }, { status: 500 });
        }

        const res = await response.json();
        const token = res.token;
        localStorage.setItem('token', token);

        console.log('Token set. It will be removed in 30 minutes.');
        const tokenExpiryTime = Date.now() + 30 * 60 * 1000;
        localStorage.setItem('tokenExpiryTime', tokenExpiryTime);
    
        const intervalId = setInterval(() => {
            const currentTime = Date.now();
            const storedExpiryTime = localStorage.getItem('tokenExpiryTime');
            if (currentTime >= storedExpiryTime) {
                localStorage.removeItem('token');
                localStorage.removeItem('tokenExpiryTime');
                clearInterval(intervalId);
                console.log('Token removed after 30 minutes.');
            }
        }, 1000);

        return redirect('/admin');
        
    } catch (error) {
        console.error("Login failed:", error);
        throw json({ message: 'Login failed.' }, { status: 500 });
    }
}

