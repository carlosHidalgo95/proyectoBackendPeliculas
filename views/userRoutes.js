const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

const db = require('../db/db');
const { authBearerMiddleware } = require('../middleware/auth.middleware');

router.get('/get',authBearerMiddleware, userController.getUser);
router.delete('/delete',userController.deleteUser);

module.exports = router;