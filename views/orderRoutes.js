const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersControllers');
const {verifyToken}=require("../services/auth.services");

const db = require('../db/db');

// router.get('/', seriesController.getSeries);
router.get('/getUserOrders',verifyToken, ordersController.getOrdersByUser);

module.exports = router;