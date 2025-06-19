

const axios =  require("axios");

const URL = "http://localhost:3000/movies"

const form_item = document.getElementById("form");
const button_reset = document.getElementById('Reset');

const title_item = document.getElementById("title");
const director_item = document.getElementById("director");
const genre_item = document.getElementById("genre");
const rate_item = document.getElementById("rate");
const year_item = document.getElementById("year");
const duration_item = document.getElementById("duration");
const url_item = document.getElementById("url");


const send = async () => {
    console.log('accedemos a data')
const data = {
title: title_item.value,
year: Number(year_item.value),
director: director_item.value,
duration: duration_item.value,
genre: genre_item.value.split(","),
rate: +rate_item.value,
poster: url_item.value,
};
  try {
    const response = await axios.post(URL, data);
     console.log(response.data);
    alert("Película agregada con éxito");
    reset();
  } catch (err) {
    const mensajeError =
      err.response?.data?.error || err.message || "Error desconocido";
    alert("Error: " + mensajeError);
  }
};



const reset = () => {
  title_item.value = "";
  year_item.value = "";
  director_item.value = "";
  duration_item.value = "";
  genre_item.value = "";
  rate_item.value = "";
  url_item.value = "";
};

const validar = () => {
  const title = title_item.value.trim();
  const year = parseInt(year_item.value);

  if (title === "") {
    alert("El título no puede estar vacío.");
    return false;
  }

  const currentYear = new Date().getFullYear();
  if (isNaN(year) || year < 1900 || year > currentYear) {
    alert(`El año debe estar entre 1900 y ${currentYear}.`);
    return false;
  }

  return true;
};

form_item.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validar()) {
    send();
  }
});


button_reset.addEventListener('click', reset);


