const models = require('../models/index');
const { Op } = require("sequelize");

const moviesController = {}

//SELECCIONAR TODAS LAS PELICULAS

moviesController.getMovies = async (req, res) => {
    let resp = await models.movie.findAll();
    res.send(resp);
}

/* SELECCIONAR PELICULA POR ID. */

moviesController.getMoviesById = async (req, res) => {
    let resp = await models.movie.findAll({
        where: {
            id: req.params.id
        }
    });
    res.send(resp);
}

/* SELECCIONAR PELICULA POR TÍTULO. */

moviesController.searchMovies = async (req, res) => {
    let resp = await models.movie.findAll({
        where: {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: "%" + req.params.word + "%"
                        }
                    },
                    {
                        genre: {
                            [Op.like]: "%" + req.params.word + "%"
                        } 
                    },
                    {
                        actors: {
                            [Op.like]: "%" + req.params.word + "%"
                        }
                    }

                ]
        }
    });
    res.send(resp);
}

/* SELECCIONAR PELICULA POR GENERO. */

moviesController.getMoviesByGenre = async (req, res) => {
    let resp = await models.movie.findAll({
        where: {
            genre: { [Op.like]: "%" + req.params.genre + "%" }
        }
    });
    res.send(resp);
}

/* SELECCIONAR PELICULAS CON RATING MAS ALTO. */

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