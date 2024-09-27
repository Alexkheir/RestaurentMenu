const { where } = require('sequelize');
const db = require('../models');

exports.addOrder = async (req, res) => {
    const { customerInfo, orderItems } = req.body;

    try {
        const order = await db.Order.create({
            customerName: customerInfo.fullName,
            location: customerInfo.address,
            phoneNumber: customerInfo.phoneNumber,
            totalAmount: orderItems.reduce((total, item) => total + item.price * item.amount, 0),
            status: 'Pending'
        });

        const orderItemsData = orderItems.map(item => ({
            OrderId: order.Order_Id,
            name: item.name,
            price: item.price,
            quantity: item.amount,
        }));

        await db.OrderItem.bulkCreate(orderItemsData);

        res.status(201).json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error creating order' });
    }
};

const fetchOrdersByStatus = async (status) => {
    const orders = await db.Order.findAll({
        where: { status }
    });

    const orderIds = orders.map(order => order.Order_Id);

    const orderItems = await db.OrderItem.findAll({
        where: { OrderId: orderIds }
    });

    return orders.map(order => ({
        ...order.toJSON(),
        orderItems: orderItems.filter(item => item.OrderId === order.Order_Id)
    }));
};

exports.getTodaysOrders = async (req, res) => {
    try {
        const ordersWithItems = await fetchOrdersByStatus('Pending');
        res.status(200).json({ orders: ordersWithItems });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error fetching today\'s orders' });
    }
};

exports.getOrdersHistory = async (req, res) => {
    try {
        const ordersWithItems = await fetchOrdersByStatus('Done');
        res.status(200).json({ orders: ordersWithItems });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error fetching orders history' });
    }
};

exports.markOrderAsDone = async (req, res) => {
    const { orderId } = req.body;

    try {
        await db.Order.update({ status: 'Done' }, { where: { Order_Id: orderId } });
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error marking order as done' });
    }
};