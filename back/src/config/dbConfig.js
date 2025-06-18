const mongoose = require('mongoose');

const URI = 'mongodb+srv://valen3601:Z04ukoo4XPl9JRc6@cluster0.wx6pv1y.mongodb.net/prueba'

const dbConfig = async () => {
    await mongoose.connect(URI)
};

module.exports = dbConfig;