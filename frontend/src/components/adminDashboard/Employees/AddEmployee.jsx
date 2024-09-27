import { useNavigate } from "react-router-dom";
import useSubmitForm from "../../../hooks/useSubmitForm";
import EmployeeForm from "./EmployeeForm";

function AddEmployee() {
    const navigate = useNavigate();
    const { actionStatus, handleSubmit } = useSubmitForm('http://localhost:8080/employees/addEmployee', () => navigate('/admin/view-employees'));

    return <EmployeeForm initialData={{}} onSubmit={(e, formData) => handleSubmit(e, formData)} actionLabel="Add Employee" actionStatus={actionStatus} />;
}

export default AddEmployee;