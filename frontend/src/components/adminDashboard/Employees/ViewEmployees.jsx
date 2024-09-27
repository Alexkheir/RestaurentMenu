import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Employee from './Employee';
import { useFetchItems } from '../../../hooks/useGetData';
import useDeleteData from '../../../hooks/useDeleteData';

function ViewEmployees() {
    const fetchedData = useFetchItems('http://localhost:8080/employees/getEmployees');
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate(); 
    const { deleteData, error } = useDeleteData('http://localhost:8080/employees/deleteEmployee');

    useEffect(() => {
        if (fetchedData.error) {
            setError(fetchedData.error);
        } else {
            setEmployees(fetchedData);
        }
    }, [fetchedData]);

    async function handleDelete(Employee_Id) {
        console.log(Employee_Id);
        await deleteData(Employee_Id);
        if (!error) {
            setEmployees(employees.filter(employee => employee.Employee_Id !== Employee_Id)); 
        } else {
            console.error('Error deleting item:', error);
        }
    }

    function handleEdit(Employee_Id) {
        navigate(`/admin/edit-employee/${Employee_Id}`); 
    }

    return (
        <div className="flex flex-col items-start">
            <div className="w-full">
                <h2 className="text-2xl font-bold mb-6 text-black">Employee List</h2>
                <ul className="flex flex-wrap gap-4">
                    {employees.map(employee => (
                        <Employee key={employee.Employee_Id} employee={employee} handleDelete={handleDelete} handleEdit={handleEdit} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ViewEmployees;