const models = require('../models/index');
const { Op } = require("sequelize");
const { findUser } = require("../services/user.services")
const jsonwebtoken = require("jsonwebtoken");


const orderController = {}

//SELECCIONAR PEDIDOS DEL USUARIO

orderController.getOrdersByUser = async (req, res) => {
    let data = req.auth;
    let user = await findUser(data.email);
    let movie, serie;
    let resp = await models.order.findAll(
        {
            where: {
                id_user: user.id,
            }
        }
    );
    for (let index = 0; index < resp.length; index++) {
        try{
            movie = await models.movie.findOne(
                {
                    where: { id_article: resp[index].dataValues.id_article }
                }
            )
            console.log(movie);
            resp[index].dataValues.title = movie.dataValues.title;
            resp[index].dataValues.url_img = movie.dataValues.url_img;
        }catch(error){

        }


        if (!movie) {
            serie = await models.serie.findOne(
                {
                    where: { id_article: resp[index].dataValues.id_article }
                }
            )
            console.log(serie);
            resp[index].dataValues.title = serie.dataValues.title;
            resp[index].dataValues.url_img = serie.dataValues.url_img;

            console.log("---------------SERIE----------")
            console.log(serie);
        }
    }

    console.log("----------------------------------------------------");
    if (!resp) {
        res.status(401).json({ message: "No orders found" });
        return;
    }
    console.log("---------------RESP-----------");
    console.log(resp);

    res.send(resp);
}

// GENERAR NUEVO PEDIDO             
orderController.postNewOrder = async (req, res) => {
    try {
        let body = req.body;
        let movie;
        let serie;
        let repeated;
        let validType = true;
        let idArticle;
        if (body.type === "movie") {
            movie = await models.movie.findOne({
                where: { title: { [Op.like]: "%" + body.title + "%" } }
            })
            repeated = await models.order.findOne({
                where: {
                    id_user: req.auth.id,
                    id_article: movie.id_article,
                }
            })
            idArticle = movie.id_article;
        } else if (body.type === "serie") {
            serie = await models.serie.findOne({
                where: { title: { [Op.like]: "%" + body.title + "%" } }
            })
            repeated = await models.order.findOne({
                where: {
                    id_user: req.auth.id,
                    id_article: serie.id_article,
                }
            })
            idArticle = serie.id_article;
        } else {
            validType = false;
            res.json({
                message: "Invalid type"
            })
        }

        if (!repeated && validType) {
            var date = new Date();
            date.setDate(date.getDate() + 7);
            console.log(date);
            let resp = await models.order.create({
                order_date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                return_date:date,
                id_user: req.auth.id,
                id_article: idArticle
            })
            res.status(200).json({
                resp,
                mail: req.auth?.mail,
                message: "Order was created succesfully"
            })
        } else if (repeated) {
            res.json({
                message: "You already have that item registered"
            })
        }
    } catch (err) {
        res.send(err)
    }
}

//ACTUALIZAR PEDIDO

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
                    id_user: req.auth.id
                }
            })
            newIdArticle = await models.movie.findOne({
                where: { title: body.newArticle }
            });
            title = movie.title;
        }
        if (body.type === "serie") {
            serie = await models.serie.findOne({
                where: { title: body.title }
            })
            order = await models.order.findOne({
                where: {
                    id_article: serie.id_article,
                    id_user: req.auth.id
                }
            })
            newIdArticle = await models.serie.findOne({
                where: { title: body.newArticle }
            }).id_article;
            title = serie.title;
        }


        let resp = await order.update({
            id_article: newIdArticle.id,
            order_date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
        })
        res.status(200).json({
            resp,
            message: `Article changed to ${title}`
        })
    } catch (error) {
        res.json({ message: "That movie is not on the order" })
        console.error(error)
    }
}

//SELECCIONAR TODOS LOS PEDIDOS

orderController.getAll = async (req, res) => {
    try {
        let resp = await models.order.findAll();
        res.send(resp);
    } catch (error) {
        console.error(error);
    }
}

module.exports = orderController;