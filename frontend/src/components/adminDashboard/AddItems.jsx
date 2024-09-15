import { useState, useEffect } from "react";
import { Form, useActionData } from "react-router-dom";

function AddItems() {
    const actionData = useActionData();
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: null,
        description: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

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
            <h1 className="text-2xl font-bold mb-6 text-black">Add Item</h1>
            {actionData && (
                <div className={`mb-4 ${actionData.success ? 'text-green-500' : 'text-red-500'}`}>
                    {actionData.success ? 'Item created successfully!' : actionData.error}
                </div>
            )}
            <Form className="w-full max-w-lg" method="post" encType="multipart/form-data">
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
                <button type="submit" className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600">Add Item</button>
            </Form>
        </div>
    );
}
export default AddItems;

export async function action({ request }) {
    const formData = await request.formData();
    const data = new FormData();
    data.append('name', formData.get('name'));
    data.append('price', formData.get('price'));
    data.append('image', formData.get('image'));
    data.append('description', formData.get('description'));

    const response = await fetch('http://localhost:8080/items/addItem', {
        method: 'POST',
        body: data
    });

    if (response.ok) {
        return { success: true };
    } else {
        return { success: false, error: 'Failed to add item' };
    }
}