const express = require('express');

const {getControllerMovies, postControllerMovies } = require ('../controllers/moviescontroller')

const router = express.Router()

router.get('/movies', getControllerMovies )
router.post('/movies', postControllerMovies )

module.exports = router