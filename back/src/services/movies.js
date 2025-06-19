
const Movie = require("../model/movie");

const getMoviesService = async () => {
  const movies = await Movie.find();
  return movies;
};

const createMovieService = async (movie) => {
  try {
    const movieResult = await Movie.create(movie);
    console.log("response", movieResult);
    return movieResult;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

module.exports = {
  getMoviesService,
  createMovieService,
};
