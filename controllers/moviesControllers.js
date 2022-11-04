const models = require('../models/index');
const { Op } = require("sequelize");

const moviesController = {}

moviesController.getMovies = async (req, res) => {
    let resp = await models.movie.findAll();
    res.send(resp);
}

moviesController.getMoviesById = async (req, res) => {
    let resp = await models.movie.findAll({ where: { id: req.params.id } });
    res.send(resp);
}

moviesController.getTopRatedMovies = async (req, res) => {
    let resp = await models.movie.findAll({
        where: {
            rating: {
                [Op.gt]: 8
            }
        }
    });

    res.send(resp);
}

module.exports = moviesController;