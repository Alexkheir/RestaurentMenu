import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSubmitForm from "../../../hooks/useSubmitForm";
import useGetData from "../../../hooks/useGetData";
import EmployeeForm from "./EmployeeForm";

function EditEmployee() {
    
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error } = useGetData(`http://localhost:8080/employees/getEmployee?id=${id}`);
    const { actionStatus, handleSubmit } = useSubmitForm('http://localhost:8080/employees/editEmployee', () => navigate('/admin/view-employees'));
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        if (data) {
            setInitialData({
                employeeName: data.employeeName,
                position: data.position,
                age: data.age,
                salary: data.salary,
                gender: data.gender,
                email: data.email
            });
        }
    }, [data]);


    return initialData ? <EmployeeForm initialData={initialData} onSubmit={(e, formData) => handleSubmit(e, formData, id)} actionLabel="Edit Employee" actionStatus={actionStatus} /> : null;
}

export default EditEmployee;