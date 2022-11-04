const express = require('express')
const router = express.Router()
const moviesController = require('../controllers/moviesControllers')

const db = require('../db/db')

router.get('/', moviesController.getMovies)
router.get('/topRated', moviesController.getTopRatedMovies)
router.get('/:id')



module.exports = router