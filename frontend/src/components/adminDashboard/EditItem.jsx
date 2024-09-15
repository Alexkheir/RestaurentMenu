import { useState, useEffect } from "react";
import { Form, useActionData, useParams, useNavigate } from "react-router-dom";

function EditItem() {
    const { id } = useParams();
    const actionData = useActionData();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: null,
        description: ''
    });

    useEffect(() => {
        const fetchItemDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/items/getItem`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: id })
                });
                const data = await response.json();
                setFormData({
                    name: data.name,
                    price: data.price,
                    image: null,
                    description: data.description
                });
            } catch (error) {
                console.error('Error fetching item details:', error);
            }
        };

        fetchItemDetails();
    }, [id]);

    function handleChange(e){
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('id', id);
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await fetch(`http://localhost:8080/items/editItem`, {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                navigate('/admin/view-items'); 
            } else {
                console.error('Failed to update item');
            }
        } catch (error) {
            console.error('Error updating item:', error);
        }
    }

    useEffect(() => {
        if (actionData && actionData.success) {
            setFormData({
                name: '',
                price: '',
                image: null,
                description: ''
            });
        }
    }, [actionData]);

    return (
        <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-6 text-black">Edit Item</h1>
            {actionData && (
                <div className={`mb-4 ${actionData.success ? 'text-green-500' : 'text-red-500'}`}>
                    {actionData.success ? 'Item updated successfully!' : actionData.error}
                </div>
            )}
            <Form className="w-full max-w-lg" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-black">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-black">Price:</label>
                    <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-black">Image:</label>
                    <input type="file" id="image" name="image" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-black">Description:</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg"></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600">Update Item</button>
            </Form>
        </div>
    );
}

export default EditItem;