
const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");


app.use(bodyParser.json());


mongoose.connect("mongodb+srv://Antho78:LABRADOR78@clusterstreaming.w8pyx.mongodb.net/clusterStreaming?retryWrites=true&w=majority")
.then(() => {
    console.log("connexion à mongodb réussi")
})
.catch(() => {
    console.log("connexion à mongodb echoué")
})


const routeUsers = require("./routes/users");
const routePosts = require("./routes/posts");
const routeFilms = require("./routes/films");

app.use("/", routeUsers);
app.use("/", routePosts);
app.use("/", routeFilms);


module.exports = app;


 