const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesControllers');

const db = require('../db/db');

router.get('/', moviesController.getMovies);
router.get('/byId/:id',moviesController.getMoviesById);
router.get('/search/:word',moviesController.searchMovies);
router.get('/byGenre/:genre',moviesController.getMoviesByGenre);
router.get('/topRated', moviesController.getTopRatedMovies);

module.exports = router;