import Modal from "../../UI/Modal";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import { formatCurrency } from "../../../util/currencyFormatter";
import Input from "../../UI/Input";
import Button from "../../UI/Buttons";
import UserProgressContext from "../../../store/UserProgressContext";
import styles from '../menu.module.css';
import { useState } from "react";




function Checkout() {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);
    const [orderConfirmed, setOrderConfirmed] = useState(false);


    const [customerInfo, setCustomerInfo] = useState({
        fullName: '',
        phoneNumber: '',
        address: '',
    });

    const cartTotal = cartContext.items.reduce((total, item) => {
        return total + item.price * item.amount;
    }, 0);



    function cancelCheckoutHandler() {
        userProgressContext.hideCheckout();
    }

    async function confirmCheckoutHandler(e) {
        e.preventDefault();
        const orderData = {
            customerInfo,
            orderItems: cartContext.items
        };


        try {
            const response = await fetch('http://localhost:8080/orders/addOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });

            if (!response.ok) {
                throw new Error('Failed to send order.');
            }

            setOrderConfirmed(true);
            setTimeout(() => {
                userProgressContext.hideCheckout(); 
            }, 2000);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function inputChangeHandler(event) {
        const { id, value } = event.target;
        setCustomerInfo(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    return <Modal open={userProgressContext.userProgress === 'CHECKOUT'}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: {formatCurrency(cartTotal)}</p>
            <Input label="Full Name" id="fullName" type="text" value={customerInfo.fullName} onChange={inputChangeHandler} />
            <Input label="Phone Number" id="phoneNumber" type="text" value={customerInfo.phoneNumber} onChange={inputChangeHandler} />
            <Input label="Address" id="address" type="text" value={customerInfo.address} onChange={inputChangeHandler} />
            {orderConfirmed && <p>Order has been confirmed!</p>}

            <p className={styles.modalActions}>
                <Button type="button" textOnly onClick={cancelCheckoutHandler}>Cancel</Button>
                <Button onClick={confirmCheckoutHandler}>Confirm</Button>
            </p>
        </form>
    </Modal>
}

export default Checkout;