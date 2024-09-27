import { Form, useActionData } from 'react-router-dom';

function LoginForm() {
    const actionData = useActionData();

   
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#29251c] to-[#2c2306]">
            <div className="bg-[#1d1a16] p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-[#ffc404]">Login</h1>
                
                <Form method="post" className="space-y-4"> 
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc404] bg-[#312c1d] text-[#d9e2f1]"
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc404] bg-[#312c1d] text-[#d9e2f1]"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-[#ffc404] text-[#1f1a09] py-2 rounded-lg hover:bg-[#ffab04]"
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