
// const { getMoviesService } = require('../services/movies');

// const getControllerMovies = async (req, res) => {


//     const movies =  await getMoviesService()
//     res.send(movies);
// };

// const postControllerMovies = (req, res) => {
//     console.log('quien es req', req.body);

//     res.send('hola post movies')
// }

// module.exports = {
//     getControllerMovies,
//     postControllerMovies,
// };


const {
  getMoviesService,
  createMovieService,
} = require("../services/movies");

const getControllerMovies = async (req, res) => {
  const movies = await getMoviesService();
  res.json(movies);
};

const postControllerMovies = async (req, res) => {
  const { body } = req;
  console.log("vemos el body", body);

  await createMovieService(body);

  res.send("película creada correctamente");
};

module.exports = {
  getControllerMovies,
  postControllerMovies,
};

