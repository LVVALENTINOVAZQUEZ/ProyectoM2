
const { getMoviesService } = require('../services/movies');

const getControllerMovies = (req, res) => {


    const movies = getMoviesService()
    res.send(movies);
};

const postControllerMovies = (req, res) => {
    console.log('quien es req', req.body);

    res.send('hola post movies')
}

module.exports = {
    getControllerMovies,
    postControllerMovies,
};
