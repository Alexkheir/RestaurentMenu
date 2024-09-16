import '../Menu/menu.css';

function MealItems({ meal, className }) {
    return (
        <li className={`meal-item ${className}`}>
            <article>
                <img src={`http://localhost:8080/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{meal.price}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <button>Add to Cart</button>
                </p>
            </article>
        </li>
    )
}

export default MealItems;