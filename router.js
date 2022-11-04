const express = require('express')
const router = express.Router()

const MoviesRoutes = require('./views/moviesRoutes')


//middleware para las rutas

router.use('/movies', MoviesRoutes)

module.exports = router