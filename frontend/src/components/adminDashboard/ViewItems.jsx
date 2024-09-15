import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewItems() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate(); // Add this line

    useEffect(() => {
        fetch('http://localhost:8080/items/getAllItems')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    async function handleDelete(Item_Id) {
        console.log({Item_Id});
        try {
            const response = await fetch(`http://localhost:8080/items/deleteItem`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: Item_Id }) // Ensure the key matches the backend
            });
            if (response.ok) {
                setItems(items.filter(item => item.Item_Id !== Item_Id)); // Use Item_Id here
            } else {
                console.error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    async function handleEdit(Item_Id) {
        navigate(`/admin/edit-item/${Item_Id}`); // Update this line
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-black">View Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                    <div key={item.Item_Id} className="border rounded-lg p-4 shadow-lg">
                        <img src={`http://localhost:8080/${item.image}`} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                        <p className="text-gray-700 mb-2">${item.price.toFixed(2)}</p>
                        <p className="text-gray-600 mb-4">{item.description}</p>
    
                        <button onClick={() => handleEdit(item.Item_Id)} className="bg-yellow-400 text-white px-4 py-2 rounded mr-2">Edit</button>
                        <button onClick={() => handleDelete(item.Item_Id)} className="bg-yellow-400 text-white px-4 py-2 rounded">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewItems;