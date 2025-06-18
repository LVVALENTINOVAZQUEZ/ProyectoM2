const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    director:{
        type:String
    },
    duration:{
        type:String
    },
    genre:{
        type: Array,
        required: true
    },
    rate:{
        type: Number,
    },
    poster:{
        type: String
    },
});

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;

