
import styles from '../menu.module.css';
import { useState, useEffect } from 'react';
import MealItems from './MealItems'; 
import { useFetchItems } from '../../../hooks/useGetData';


function Meals() {
    const items = useFetchItems('http://localhost:8080/items/getAllItems');

    return (
        <ul className={styles.meals}>
            {items.map((item) => (
                <MealItems key={item.id} meal={item} className={styles.mealsStyle} />
            ))}
        </ul>
    )
}

export default Meals;       