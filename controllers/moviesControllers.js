const models = require('../models/index');
const { Op } = require("sequelize");

const moviesController = {}

moviesController.getMovies = async (req, res) => {
    let resp = await models.movie.findAll();
    res.send(resp);
}

/* This is a function that is getting a movie by its id. */
moviesController.getMoviesById = async (req, res) => {
    let resp = await models.movie.findAll({ 
        where: { 
            id: req.params.id 
        }
     });
    res.send(resp);
}

/* This is a function that is getting a movie by its title. */
moviesController.getMoviesByTitle = async (req, res) => {
    let resp = await models.movie.findAll({ 
        where: { 
            title: req.params.title
        }
     });
    res.send(resp);
}

moviesController.getMoviesByGenre = async (req, res) => {
    let resp = await models.movie.findAll({ 
        where: { 
            genre:{[Op.like]: "%"+req.params.genre+"%"}
        }
     });
    res.send(resp);
}

moviesController.getTopRatedMovies = async (req, res) => {
    let resp = await models.movie.findAll({
        where: {
            rating: {
                [Op.gt]: 4
            }
        }
    });

    res.send(resp);
}

module.exports = moviesController;