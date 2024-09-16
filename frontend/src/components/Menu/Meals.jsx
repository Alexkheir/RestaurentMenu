import './menu.css';
import { useState, useEffect } from 'react';
import MealItems from './MealItems'; 
import { useFetchItems } from '../../hooks/useGetData';
function Meals() {
    const items = useFetchItems('http://localhost:8080/items/getAllItems');

    return (
        <ul id="meals">
            {items.map((item) => (
                <MealItems key={item.id} meal={item} className="meals-style" />
            ))}
        </ul>
    )
}

export default Meals;