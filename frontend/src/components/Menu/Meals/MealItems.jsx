import Button from '../../UI/Buttons';
import { formatCurrency } from '../../../util/currencyFormatter';
import { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import styles from "../menu.module.css";

function MealItems({ meal, className }) {
    const cartContext = useContext(CartContext);
    function addItemToCartHandler(item) {
        cartContext.addItem(item);
    }

    return (
        <li className={`${styles.mealItem} ${className}`}>
            <article>
                <img src={`http://localhost:8080/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className={styles.mealItemPrice}>{formatCurrency(meal.price)}</p>
                    <p className={styles.mealItemDescription}>{meal.description}</p>
                </div>
                <p className={styles.mealItemActions}>
                    <Button onClick={() => {
                        addItemToCartHandler(meal);
                    }}>Add to Cart</Button>
                </p>
            </article>
        </li>
    )
}

export default MealItems;