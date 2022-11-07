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

orderController.updateOrder = async (req, res) => {
    try {
        let body = req.body;
        let movie = await models.movies.findOne({
            where: { title: body.name }
        })
        let orderedMovie = await models.orders.findOne({
            where: {
                id_article: movie.id_article,
            }
        })
        if (body.email === req.auth?.email && movie.id_article === orderedMovie.id_article) {
            let resp = await models.orders.update({
                rentingDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
            },
                {
                    where: {
                        id_article: orderedMovie.id_article
                    }
                })
        } res.status(200).json({
            message: `New Date for the movie ${movie.title}`
        })
    } catch (error) {
        res.json({ message: "That movie is not on the order" })
        console.error(error)
    }
}

module.exports = orderController;