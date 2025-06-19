const mongoose = require('mongoose');

const URI = 'mongodb+srv://valen3601:xup2059H1Y0h5PLA@moviesplay.oqs3ngz.mongodb.net/movies'

const dbConfig = async () => {
    await mongoose.connect(URI)
};

module.exports = dbConfig;