const models = require('../models/index');
// const user=require("../models/user")
const { Op, json } = require("sequelize");
const jsonwebtoken = require("jsonwebtoken");


const orderController = {}

orderController.getOrdersByUser = async (req, res) => {
    let data = req.auth;
    let user = await models.user.findOne({
        where: {
            email: data.email
        }
    });

    let resp = await models.order.findAll(
        {
            where: {
                id_user: user.id,
            }
        }
    );
    res.send(resp);
}


module.exports = orderController;