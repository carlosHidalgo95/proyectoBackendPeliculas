const express = require('express')
const router = express.Router()

const MoviesRoutes = require('./views/moviesRoutes')
const SeriesRoutes = require('./views/seriesRoutes')



//middleware para las rutas

router.use('/movies', MoviesRoutes)
router.use('/series', SeriesRoutes)

module.exports = router