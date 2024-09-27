import Header from "../components/Menu/Header/Header";
import Meals from "../components/Menu/Meals/Meals";
import Cart from "../components/Menu/Cart/Cart";
import Checkout from "../components/Menu/Checkout/Checkout";
import React, { useEffect } from 'react';
import styles from '../components/Menu/menu.module.css';

function Menu() {
  useEffect(() => {
    document.body.classList.add(styles.menuBody);

    return () => {
      document.body.classList.remove(styles.menuBody);
    };
  }, []);
    return (
        <div style={{  minHeight: '100vh' }}>
            <Header />
            <Meals />
            <Cart />
            <Checkout />
        </div>
    )
}

export default Menu;