const express = require('express');

const {getControllerMovies, postControllerMovies } = require ('../controllers/moviescontroller')
const validateMovie = require("../middlewares/validate");

const router = express.Router()

router.get('/movies', getControllerMovies )
router.post('/movies', validateMovie, postControllerMovies )

module.exports = router