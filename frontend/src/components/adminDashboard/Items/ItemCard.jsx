import React from 'react';
import ActionButton from '../../ButtonsActions/ButtonAction';
import { useNavigate } from 'react-router-dom';

function ItemCard({ item, handleEdit, handleDelete }) {
    const navigate = useNavigate();

    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <img src={`http://localhost:8080/${item.image}`} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-2">${item.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <ActionButton onClick={() => handleEdit(item.Item_Id)} label="Edit" className="mr-2" />
            <ActionButton onClick={() => handleDelete(item.Item_Id)} label="Delete" />
        </div>
    );
}

export default ItemCard;