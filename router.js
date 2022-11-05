const express = require('express')
const router = express.Router()

const MoviesRoutes = require('./views/moviesRoutes')
const SeriesRoutes = require('./views/seriesRoutes')
const UserRoutes = require('./views/userRoutes')


//middleware para las rutas

router.use('/movies', MoviesRoutes)
router.use('/series', SeriesRoutes)
router.use('/users', UserRoutes)

module.exports = router