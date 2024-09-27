import { useState, useEffect } from "react";
import { useFetchItems } from "../../../hooks/useGetData";
import OrderCard from "./OrderCard";

function ViewOrdersHistory() {
    const [orders, setOrders] = useState([]);
    const fetchedOrders = useFetchItems('http://localhost:8080/orders/getOrdersHistory');

    useEffect(() => {
        if (fetchedOrders && fetchedOrders.orders) {
            setOrders(fetchedOrders.orders); 
        }
    }, [fetchedOrders]);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 text-black">View Orders History</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.length > 0 ? (
                    orders.map(order => (
                        <OrderCard 
                            key={order.Order_Id} 
                            order={order} 
                            orderItems={order.orderItems} 
                        />
                    ))
                ) : (
                    <p>No orders found in history.</p>
                )}
            </div>
        </div>
    );
}

export default ViewOrdersHistory;