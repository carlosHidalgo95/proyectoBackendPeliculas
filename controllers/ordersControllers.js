const models = require('../models/index');
const { Op } = require("sequelize");

const orderController = {}

orderController.getOrdersByUser = async (req, res) => {
    console.log("fuck");
    let data=req.body;
    console.log(data);
    let resp = await models.order.findAll(
        {
            where: {
                id_user : data.id_user,
            }
        }
    );
    res.send(resp);
}


module.exports = orderController;