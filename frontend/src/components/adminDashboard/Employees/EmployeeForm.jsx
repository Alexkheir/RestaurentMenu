import { useState, useEffect } from "react";
import { Form } from "react-router-dom";

function EmployeeForm({ initialData, onSubmit, actionLabel, actionStatus }) {
    const [formData, setFormData] = useState({
        employeeName: '',
        position: '',
        age: '',
        salary: '',
        gender: '',
        email: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-6 text-black">{actionLabel}</h1>
            {actionStatus && (
                <div className={`mb-4 ${actionStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                    {actionStatus.success ? (initialData ? 'Employee updated successfully!' : 'Employee added successfully!') : actionStatus.error}
                </div>
            )}
            <Form method="post" className="w-full max-w-lg" onSubmit={(e) => onSubmit(e, formData)}>
                <div className="mb-4">
                    <label htmlFor="employeeName" className="block text-black">Employee Name:</label>
                    <input type="text" id="employeeName" name="employeeName" value={formData.employeeName} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="position" className="block text-black">Position:</label>
                    <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-black">Age:</label>
                    <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="salary" className="block text-black">Salary:</label>
                    <input type="number" id="salary" name="salary" value={formData.salary} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="gender" className="block text-black">Gender:</label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg custom-select">
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-black">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600">{actionLabel}</button>
            </Form>
        </div>
    );
}

export default EmployeeForm;