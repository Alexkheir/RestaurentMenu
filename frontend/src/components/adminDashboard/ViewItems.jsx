import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../ButtonsActions/ButtonAction';
import { useFetchItems } from '../../hooks/useGetData';

function ViewItems() {
    const items = useFetchItems('http://localhost:8080/items/getAllItems');
    const navigate = useNavigate(); 


    async function handleDelete(Item_Id) {

        try {
            const response = await fetch(`http://localhost:8080/items/deleteItem`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: Item_Id }) 
            });
            if (response.ok) {
                setItems(items.filter(item => item.Item_Id !== Item_Id)); 
            } else {
                console.error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    async function handleEdit(Item_Id) {
        navigate(`/admin/edit-item/${Item_Id}`); 
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
    
                        <ActionButton onClick={() => handleEdit(item.Item_Id)} label="Edit" className="mr-2" />
                        <ActionButton onClick={() => handleDelete(item.Item_Id)} label="Delete" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewItems;