const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

const db = require('../db/db');

router.get('/', userController.getUser);
router.post('/create',userController.createUser);
router.delete('/delete',userController.deleteUser);
// router.get('/byId/:id',userController.getSeriesById);

module.exports = router;