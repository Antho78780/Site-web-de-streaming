const express = require("express");

const router = express.Router();

const controllersFilms = require("../controllers/films")

router.post("/createAllFilms", controllersFilms.createAllFilms)


module.exports = router;