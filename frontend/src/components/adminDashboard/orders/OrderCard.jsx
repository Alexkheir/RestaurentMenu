import React from 'react';

const OrderCard = ({ order, orderItems, onMarkAsDone }) => {

    return (
        <div className="order-card bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold mb-4">{order.customerName}</h2>
            <div className="mb-4">
                <p className="text-gray-600"><strong>Phone:</strong> {order.phoneNumber}</p>
                <p className="text-gray-600"><strong>Location:</strong> {order.location}</p>
            </div>
            <ul className="mb-4 border-t border-b border-gray-200 py-4">
                {orderItems.map(item => (
                    <li key={item.OrderItem_Id} className="text-gray-800 flex justify-between py-2">
                        <span>{item.quantity} x {item.name}</span>
                        
                        <span>${item.price * item.quantity}</span>
                    </li>
                ))}
            </ul>
            <p className="text-lg font-semibold mb-4">Total: ${order.totalAmount}</p>
            {onMarkAsDone && (
                <button 
                    onClick={() => onMarkAsDone(order.Order_Id)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
                >
                    Mark as Done
                </button>
            )}
        </div>
    );
};

export default OrderCard;