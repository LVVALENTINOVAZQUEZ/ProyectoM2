const URL = "http://localhost:3000/movies"

const form_item = document.getElementById("form")
const button_send = document.getElementById('send')
const button_reset = document.getElementById('Reset')

const title_item = document.getElementById("title")
const director_item = document.getElementById("director")
const genre_item = document.getElementById("genre")
const rate_item = document.getElementById("rate")
const year_item = document.getElementById("year")
const duration_item = document.getElementById("duration")
const url_item = document.getElementById("url")


const send = () => {
    console.log('accedemos a data')
const data = {
title: title_item.value,
year: year_item.value,
director: director_item.value,
duration: duration_item.value,
genre: genre_item.value,
rate: rate_item.value,
poster: url_item.value,
};

fetch(URL, {
    method:"Post",
    body: JSON.stringify(data),
    headers: {
    "content-type": "application/json"
    }
})
console.log('tenemos data', data);

};

const reset = () =>{
title_item = ""
year_item.value = ""
director_item.value = ""
duration_item.value = ""
genre_item.value = ""
rate_item.value = ""
url_item.value = ""
}


form_item.addEventListener("submit", (e) => {
    e.preventDefault()
    send();
});

button_send.addEventListener('click', send)

button_reset.addEventListener('click', reset);