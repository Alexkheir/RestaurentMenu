import { useState, useEffect } from "react";
import { Form, useActionData } from "react-router-dom";
import ActionButton from "../ButtonsActions/ButtonAction";

function ItemForm({ initialData, onSubmit, actionLabel, actionStatus }) {
    const actionData = useActionData();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: null,
        description: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

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

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    return (
        <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-6 text-black">{actionLabel}</h1>
            {actionStatus && (
                <div className={`mb-4 ${actionStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                    {actionStatus.success ? (initialData ? 'Item updated successfully!' : 'Item created successfully!') : actionStatus.error}
                </div>
            )}
            <Form className="w-full max-w-lg" method="post" encType="multipart/form-data" onSubmit={(e) => onSubmit(e, formData)}>
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
                <ActionButton type="submit" label={actionLabel} className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600" />
            </Form>
        </div>
    );
}

export default ItemForm;