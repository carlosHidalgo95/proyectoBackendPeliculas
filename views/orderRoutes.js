const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersControllers');
const {verifyToken}=require("../services/auth.services");

const db = require('../db/db');
const { authBearerMiddleware } = require('../middleware/auth.middleware');

// router.get('/', seriesController.getSeries);
router.get('/getUserOrders',authBearerMiddleware, ordersController.getOrdersByUser);

module.exports = router;