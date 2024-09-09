import { Form, useActionData } from 'react-router-dom';

function LoginForm() {
    const actionData = useActionData();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                
                <Form method="post" className="space-y-4"> 
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        Login
                    </button>
                </Form>
                {actionData && (
                    <div className="mt-4 text-center text-red-500">
                        {actionData.message}
                    </div>
                )}
            </div>
        </div>
    )
}

export default LoginForm;