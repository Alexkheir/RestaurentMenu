import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../../ButtonsActions/ButtonAction';
import { useFetchItems } from '../../../hooks/useGetData';
import useDeleteData from '../../../hooks/useDeleteData';
import ItemCard from './ItemCard';

function ViewItems() {
    const fetchedItems = useFetchItems('http://localhost:8080/items/getAllItems');
    console.log(fetchedItems);
    const [items, setItems] = useState([]);
    const { deleteData, error } = useDeleteData('http://localhost:8080/items/deleteItem');
    const navigate = useNavigate(); 

    useEffect(() => {
        setItems(fetchedItems);
    }, [fetchedItems]);

    async function handleDelete(Item_Id) {
        await deleteData(Item_Id);
        if (!error) {
            setItems(items.filter(item => item.Item_Id !== Item_Id)); 
        } else {
            console.error('Error deleting item:', error);
        }
    }

    async function handleEdit(Item_Id) {
        navigate(`/admin/edit-item/${Item_Id}`); 
    }

    return (
        <div >
            <h1 className="text-2xl font-bold mb-6 text-black">View Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                    <ItemCard 
                        key={item.Item_Id} 
                        item={item} 
                        handleEdit={handleEdit} 
                        handleDelete={handleDelete} 
                    />
                ))}
            </div>
        </div>
    );
}

export default ViewItems;