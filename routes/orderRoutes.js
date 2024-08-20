const express = require('express');
const OrderController = require('../controllers/orderController');
const router = express.Router();

router.get('/user/:id', OrderController.getOrderByUserId);
router.post('/user/:id/add', OrderController.createOrder);
router.delete('/user/:id/product/:productCode', OrderController.deleteOrderByUserId);

module.exports = router;

