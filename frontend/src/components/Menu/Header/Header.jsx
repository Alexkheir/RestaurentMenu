import React from 'react';
import styles from '../menu.module.css';
import Logo from "../../../assets/logo.jpg"
import Button from '../../UI/Buttons';
import { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import UserProgressContext from '../../../store/UserProgressContext';

function Header() {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);
    const totalItems = cartContext.items.reduce((total, item) => {
        return total + item.amount;
    }, 0);

    function showCartHandler() {
        userProgressContext.showCart();
    }

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <img src={Logo} alt="Logo" />
                <h1>Menu</h1>
            </div>
            <nav>
                <Button textOnly onClick={showCartHandler}>
                    Cart({totalItems})
                </Button>
            </nav>
        </header>
    )
}

export default Header;