import Modal from "../../UI/Modal";
import CartContext from "../../../store/CartContext";
import { useContext } from "react";
import {formatCurrency} from "../../../util/currencyFormatter";
import Button from "../../UI/Buttons";
import UserProgressContext from "../../../store/UserProgressContext";
import CartItem from "./CartItem";
import styles from '../menu.module.css';

function Cart() {
    const cartCtx = useContext(CartContext);
    const total=cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.amount, 0);
    const userProgressContext = useContext(UserProgressContext);

    function closeCartHandler() {
        userProgressContext.hideCart();
    }

    function showCheckoutHandler() {
        userProgressContext.showCheckout();
    }

    return <Modal className={styles.modal} open={userProgressContext.userProgress === 'CART'} >

            <h2>Cart</h2>
            <ul className={styles.cartList}>
                {cartCtx.items.map(item => 
                    <CartItem key={item.Item_Id} item={item} />
                )}
            </ul>
            <p className={styles.cartTotal}>Total Amount: {formatCurrency(total)}</p>
            <p className={styles.modalActions}>
                <Button textOnly onClick={closeCartHandler}>Close</Button>
                {cartCtx.items.length > 0 && <Button onClick={showCheckoutHandler}>Order</Button>}
            </p>

    </Modal>
}

export default Cart;