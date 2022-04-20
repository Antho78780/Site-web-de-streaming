const modelsFilms = require("../models/films")

exports.createAllFilms = (req, res) => {
    modelsFilms.create({
        image: req.body.image,
        nameFilm: req.body.nameFilm
    })
    .then((createFilm) => {
        res.status(201).json(createFilm);
    })
}