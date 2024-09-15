import './menu.css';
import { useState, useEffect } from 'react';
import MealItems from './MealItems'; 

function Meals() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://localhost:8080/items/getAllItems');
            const data = await response.json();
            setItems(data);
        }
        fetchItems();
    }, []);

    return (
        <ul id="meals">
            {items.map((item) => (
                <MealItems key={item.id} meal={item} />
            ))}
        </ul>
    )
}

export default Meals;