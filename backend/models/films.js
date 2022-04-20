const mongoose = require("mongoose");

const {Schema} = mongoose;

const schemaFilms = new Schema({
    image: String,
    nameFilm: String,
})

const films = mongoose.model("Films", schemaFilms);

module.exports = films;
