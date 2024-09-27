import React from 'react';
import ActionButton from '../../ButtonsActions/ButtonAction';
import { formatCurrency } from '../../../util/currencyFormatter';

const Employee = ({ employee, handleEdit, handleDelete }) => {
    return (
        <div className="border rounded-lg p-4 shadow-lg flex-1 min-w-[calc(50%-1rem)] sm:min-w-full">
            <h2 className="text-xl font-bold mb-2">{employee.employeeName}</h2>
            <p className="text-gray-700 mb-2"><strong>Position:</strong> {employee.position}</p>
            <p className="text-gray-700 mb-2"><strong>Age:</strong> {employee.age}</p>
            <p className="text-gray-700 mb-2"><strong>Salary:</strong> {formatCurrency(employee.salary)}</p>
            <p className="text-gray-700 mb-2"><strong>Gender:</strong> {employee.gender}</p>
            <p className="text-gray-700 mb-4"><strong>Email:</strong> {employee.email}</p>
            <ActionButton onClick={() => handleEdit(employee.Employee_Id)} label="Edit" className="mr-2" />
            <ActionButton onClick={() => handleDelete(employee.Employee_Id)} label="Delete" />
        </div>
    );
};

export default Employee;