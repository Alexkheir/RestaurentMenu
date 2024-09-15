const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/ItemsController');

router.post('/addItem', itemsController.addItem);
router.get('/getAllItems', itemsController.getAllItems);
router.delete('/deleteItem', itemsController.deleteItem);
router.post('/getItem', itemsController.getItem);
router.post('/editItem', itemsController.editItem);
module.exports = router;