import '../../menu.css';
import { useState, useEffect } from 'react';
import MealItem from './MealItem';

function Meals() {
    const [items, setItems] = useState([]);

    useEffect(() => {
    async function fetchItems() {
        const response = await fetch('http://localhost:8080/Items/getItems');
        const data = await response.json();
        setItems(data);
        }
        fetchItems();
    }, []);

    return (
        <ul id="meals">
            {items.map((item) => (
                <MealItem key={item.id} meal={item} />
            ))}
        </ul>
    )
}

export default Meals;