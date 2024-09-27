import {formatCurrency} from "../../../util/currencyFormatter";
import CartContext from "../../../store/CartContext";
import { useContext } from "react";
import styles from '../menu.module.css';

function CartItem({item}) {
    const cartContext = useContext(CartContext);
    return <li className={styles.cartItem}>
        <p>{item.name} - {item.amount} x {formatCurrency(item.price)}</p>
        <p className={styles.cartItemActions}>
            <button onClick={() => cartContext.removeItem(item.Item_Id)}>-</button>
            <span>
                {item.amount}
            </span>
            <button onClick={() => cartContext.addItem(item)}>+</button>
        </p>
    </li>
}

export default CartItem;