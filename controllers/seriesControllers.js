const models = require('../models/index');
const { Op } = require("sequelize");

const seriesController = {}

seriesController.getSeries = async (req, res) => {
    let resp = await models.serie.findAll();
    res.send(resp);
}

/* This is a function that is getting a movie by its id. */
seriesController.getSeriesById = async (req, res) => {
    let resp = await models.serie.findAll({ 
        where: { 
            id: req.params.id 
        }
     });
    res.send(resp);
}

seriesController.getSeriesByTitle = async (req, res) => {
    let resp = await models.serie.findAll({ 
        where: { 
            title: req.params.title
        }
     });
    res.send(resp);
}

seriesController.getSeriesByGenre = async (req, res) => {
    let resp = await models.serie.findAll({ 
        where: { 
            genre: req.params.genre
        }
     });
    res.send(resp);
}

seriesController.getTopRatedSeries = async (req, res) => {
    let resp = await models.serie.findAll({
        where: {
            rating: {
                [Op.gt]: 8
            }
        }
    });

    res.send(resp);
}

seriesController.getComingSoonSeries=async(req,res)=>{
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