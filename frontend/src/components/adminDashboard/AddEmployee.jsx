import { Form } from "react-router-dom";

function AddEmployee() {
    return (
        <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-6 text-black">Add Employee</h1>
            <Form method="post" className="w-full max-w-lg">
                <div >
                    <label htmlFor="employeeName" className="block text-black">Employee Name:</label>
                    <input type="text" id="employeeName" name="employeeName" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="position" className="block text-black">Position:</label>
                    <input type="text" id="position" name="position" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-black">Age:</label>
                    <input type="number" id="age" name="age" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="salary" className="block text-black">Salary:</label>
                    <input type="number" id="salary" name="salary" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-black">Gender:</label>
                    <select id="gender" name="gender" className="w-full px-3 py-2 border rounded-lg">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-black">Email:</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <button type="submit" className="w-full bg-red-500 text-black py-2 rounded-lg hover:bg-red-600">Add Employee</button>
            </Form>
        </div>
    );
}

export default AddEmployee;
function action(){

    
}