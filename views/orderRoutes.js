const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersControllers');

const db = require('../db/db');
const { authBearerMiddleware } = require('../middleware/auth.middleware');

router.get('/getUserOrders',authBearerMiddleware, ordersController.getOrdersByUser);
router.put('/updateUserOrder',authBearerMiddleware,ordersController.updateOrder);

module.exports = router;