const express = require('express');
const router = express.Router();
const ItemsController = require('../controllers/ItemsController');


router.post('/addItem', ItemsController.addItem);
router.get('/getAllItems', ItemsController.getAllItems);


module.exports = router;
