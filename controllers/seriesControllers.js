const models = require('../models/index');
const { Op } = require("sequelize");

const seriesController = {}

seriesController.getSeries = async (req, res) => {
    let resp = await models.serie.findAll();
    res.send(resp);
}

/* SELECCIONAR SERIE POR ID. */
seriesController.getSeriesById = async (req, res) => {
    let resp = await models.serie.findAll({
        where: {
            id: req.params.id
        }
    });
    res.send(resp);
}

//SELECCIONAR SERIE POR TITULO

seriesController.searchSeries = async (req, res) => {
    let resp = await models.serie.findAll({
        where: {
            [Op.or]: {
                title: {
                    [Op.like]: "%" + req.params.word + "%"
                },
                genre: {
                    [Op.like]: "%" + req.params.word + "%"
                },
                actors: {
                    [Op.like]: "%" + req.params.word + "%"
                }

            }
        }
    });
    res.send(resp);
}

//SEELECCIONAR SERIE POR GENERO

seriesController.getSeriesByGenre = async (req, res) => {
    let resp = await models.serie.findAll({
        where: {
            genre: req.params.genre
        }
    });
    res.send(resp);
}

//SELECCIONAR SERIES CON RATING MAS ALTO

seriesController.getTopRatedSeries = async (req, res) => {
    let resp = await models.serie.findAll({
        where: {
            rating: {
                [Op.gt]: 4
            }
        }
    });

    res.send(resp);
}

//SELECCIONAR SERIES QUE SE ESTRENARÁN PRONTO

seriesController.getComingSoonSeries = async (req, res) => {
    let resp = await models.serie.findAll({
        where: {
            release_date: {
                [Op.between]: [new Date(), new Date().setDate(new Date().getDate() + 7)]
            }
        }
    });

    res.send(resp);
}

module.exports = seriesController;