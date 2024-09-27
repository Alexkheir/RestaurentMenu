const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const auth=require('../middleware/is-auth');

router.post('/addOrder', OrderController.addOrder);
router.get('/getTodaysOrders', OrderController.getTodaysOrders);
router.get('/getOrdersHistory', OrderController.getOrdersHistory);
router.post('/markOrderAsDone', auth, OrderController.markOrderAsDone); 

module.exports = router;