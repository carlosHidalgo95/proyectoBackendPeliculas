const express = require('express')
const router = express.Router()

const MoviesRoutes = require('./views/moviesRoutes')
const SeriesRoutes = require('./views/seriesRoutes')
const UserRoutes = require('./views/userRoutes')
const OrderRoutes= require('./views/orderRoutes')
const AuthRoutes= require('./views/authRoutes')



//middleware para las rutas

router.use('/movies', MoviesRoutes)
router.use('/series', SeriesRoutes)
router.use('/users', UserRoutes)
router.use('/orders',OrderRoutes)
router.use('/auth',AuthRoutes)

module.exports = router