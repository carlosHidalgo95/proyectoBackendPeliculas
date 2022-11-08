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
        let order;
        let serie;
        let movie;
        let newIdArticle;
        let title;
        if (body.type === "movie") {
                 movie = await models.movie.findOne({
                where: { title: body.title }
            })
            order = await models.order.findOne({
                where: {
                    id_article: movie.id_article,
                    id_user:req.auth.id
                }
            })
            console.log(order);
            newIdArticle=await models.movie.findOne({
                where: { title: body.newArticle}
            });
            console.log(newIdArticle);
            title=movie.title;
        }
        if(body.type==="serie"){
            serie = await models.serie.findOne({
                where: { title: body.title }
            })
            order = await models.order.findOne({
                where: {
                    id_article: serie.id_article,
                    id_user: req.auth.id
                }
            })
            newIdArticle=await models.serie.findOne({
                where: { title: body.newArticle}
            }).id_article;
            title=serie.title;
        }


        let resp = await order.update({
            id_article:newIdArticle.id,
            order_date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
        },
            {
                // where: {
                //     id_article: order.id_article
                // }
            })
        res.status(200).json({resp,
            message: `Article changed to ${title}`
        })
    } catch (error) {
        res.json({ message: "That movie is not on the order" })
        console.error(error)
    }
}

orderController.getAll = async (req, res) => {
    try {
        let resp = await models.order.findAll();
        res.send(resp);
    } catch (error) {
        console.error(error);
    }
}

module.exports = orderController;