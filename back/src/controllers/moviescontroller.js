
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
  try {
    const movies = await getMoviesService();
    return res.json(movies);

  }catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener películas" })
  }
};

const postControllerMovies = async (req, res) => {
  try{
      const movie = await createMovieService(req.body);
    return res
      .status(201)
      .json({ message: "Película creada correctamente", movie });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al crear la película" });
  }
 
};

module.exports = {
  getControllerMovies,
  postControllerMovies,
};

