


const axios = require("axios");


const rendercards = require("./rendercards");
// const URL = "https://students-api.up.railway.app/movies"
const URL = "http://localhost:3000/movies"



// const container = document.getElementById("container");
// asincronismo en js

// callbacks
// $.get(URL, (data) => {
//   rendercards(data);
// });

// promesas
// fetch

// fetch(URL)
// .then(response => response.json())
// .then(responseJson => rendercards(data));
// .catch(err => console.log('error', err));

// axios

// axios(URL).then((response) => {
//   rendercards(response.data);
// });
  
// Async -await

// (async () => {
//   const response = await fetch(URL)
//   const responseJson = response.json()
//   rendercards(rendercards)
// })


// (async () => {
//   try {
  
//     const response = await axios(URL);
//     rendercards(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// })();

document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM listo");
  try {
    const response = await axios(URL);
    rendercards(response.data);
  } catch (error) {
    console.error(error);
  }
});

//   const rendercards = (response) => { 
//   response.forEach(movie => {
   
  
//    const {
//     title,
//     year,
//     director,
//     duration,
//     genre,
//     rate,
//     poster,
//    } = movie;








//   const cardContainer = document.createElement("div");
//   // justo después de crear el div
// cardContainer.classList.add('tarjeta-pelicula');


//   //Creamos los elementos para añadir al DOM

//   const title_ele = document.createElement("p");
//   title_ele.classList.add("text-warning", "fs-5");
//   const year_ele = document.createElement("p");
//   const director_ele = document.createElement("p");
//   const duration_ele = document.createElement("p");
//   const genre_ele = document.createElement("p");
//   const rate_ele = document.createElement("p");
//   const poster_ele = document.createElement("img");


//   //Agregamos información a los elementos
//   title_ele.textContent = title
//   year_ele.textContent = year
//   director_ele.textContent = director
//   duration_ele.textContent = duration
//   genre_ele.textContent = genre
//   rate_ele.textContent = rate
//   poster_ele.src = poster;

//   // Agregamos los elementos al contenedor card

//   //appendchild - forma larga 
//   // cardContainer.appendChild("title_ele")

//   // append - forma corta

//   cardContainer.append(
//     poster_ele,
//     title_ele,
//     year_ele,
//     director_ele,
//     duration_ele,
//     genre_ele,
//     rate_ele,
//   );

//   // Agregamos el container card a el contenedor

//   container.appendChild(cardContainer);
// });
// };

