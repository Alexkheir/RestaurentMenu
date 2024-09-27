import { useState, useEffect } from "react";
import { useFetchItems } from "../../../hooks/useGetData";
import OrderCard from "./OrderCard";
import getAuthToken from "../../../util/auth";

function ViewTodaysOrders() {
    const [orders, setOrders] = useState([]);
    const fetchedOrders = useFetchItems('http://localhost:8080/orders/getTodaysOrders');

    useEffect(() => {
        if (fetchedOrders && fetchedOrders.orders) {
            setOrders(fetchedOrders.orders); 
        }
    }, [fetchedOrders]);

    const markOrderAsDone = async (orderId) => {
        const token = getAuthToken();
        await fetch('http://localhost:8080/orders/markOrderAsDone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({ orderId })
        });

        setOrders(orders.filter(order => order.Order_Id !== orderId));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-black">View Today's Orders</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.length > 0 ? (
                    orders.map(order => (
                        <OrderCard 
                            key={order.Order_Id} 
                            order={order} 
                            orderItems={order.orderItems} 
                            onMarkAsDone={markOrderAsDone} 
                        />
                    ))
                ) : (
                    <p>No orders found for today.</p>
                )}
            </div>
        </div>
    );
}

export default ViewTodaysOrders;