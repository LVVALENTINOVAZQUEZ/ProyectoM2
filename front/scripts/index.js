


const axios = require("axios");


const rendercards = require("./rendercards");

const URL = "http://localhost:3000/movies"

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM listo");
  try {
    const response = await axios(URL);
    rendercards(response.data);
  } catch (error) {
    console.error(error);
  }
});

