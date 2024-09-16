import useSubmitForm from "../../hooks/useSubmitForm";
import ItemForm from "../ItemForm/ItemForm";
import { useNavigate } from "react-router-dom";



function AddItems() {
    const navigate = useNavigate();
    const { actionStatus, handleSubmit } = useSubmitForm('http://localhost:8080/items/addItem', () => navigate('/admin/view-items'));

    return <ItemForm initialData={{}} onSubmit={handleSubmit} actionLabel="Add Item" actionStatus={actionStatus} />;
}

export default AddItems;