const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersControllers');

const db = require('../db/db');
const { authBearerMiddleware,isValidRoleAdmin } = require('../middleware/auth.middleware');

router.get('/getAll',authBearerMiddleware,isValidRoleAdmin,ordersController.getAll);
router.get('/getUserOrders',authBearerMiddleware, ordersController.getOrdersByUser);
router.put('/update',authBearerMiddleware,ordersController.updateOrder);

module.exports = router;