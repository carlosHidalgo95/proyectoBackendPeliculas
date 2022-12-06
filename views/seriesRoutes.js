const express = require('express');
const router = express.Router();
const seriesController = require('../controllers/seriesControllers');

const db = require('../db/db');

router.get('/', seriesController.getSeries);
router.get('/byId/:id',seriesController.getSeriesById);
router.get('/search/:word',seriesController.searchSeries);
router.get('/byGenre/:genre',seriesController.getSeriesByGenre);
router.get('/topRated', seriesController.getTopRatedSeries);
router.get('/comingSoon',seriesController.getComingSoonSeries);

module.exports = router;