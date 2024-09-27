const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/ItemsController');
const auth=require('../middleware/is-auth');

router.post('/addItem', auth, itemsController.addItem);
router.get('/getAllItems', itemsController.getAllItems);
router.delete('/deleteItem', auth, itemsController.deleteItem);
router.get('/getItem', auth, itemsController.getItem);
router.post('/editItem', auth, itemsController.editItem);
module.exports = router;