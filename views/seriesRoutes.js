const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesControllers');

const db = require('../db/db');

router.get('/', seriesController.getSeries);
router.get('/byId/:id',seriesController.getSeriesById);
router.get('/byTitle/:title',seriesController.getSeriesByTitle);
router.get('/byGenre/:genre',seriesController.getSeriesByGenre);
router.get('/topRated', seriesController.getTopRatedSeries);

module.exports = router;