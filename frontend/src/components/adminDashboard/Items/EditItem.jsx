import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSubmitForm from "../../../hooks/useSubmitForm";
import useGetData from "../../../hooks/useGetData";
import ItemForm from "./ItemForm/ItemForm";

function EditItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, error } = useGetData(`http://localhost:8080/items/getItem?id=${id}`);
    const { actionStatus, handleSubmit } = useSubmitForm('http://localhost:8080/items/editItem', () => navigate('/admin/view-items'));
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        if (data) {
            setInitialData({
                name: data.name,
                price: data.price,
                image: null,
                description: data.description
            });
        }
    }, [data]);
    console.log(initialData);


    return initialData ? <ItemForm initialData={initialData} onSubmit={(e, formData) => handleSubmit(e, formData, id)} actionLabel="Edit Item" actionStatus={actionStatus} /> : null;
}

export default EditItem;