
const express = require("express");

const app = express();

const mongoose = require("mongoose");


function database() {
	 mongoose.connect("mongodb+srv://Antho78:LABRADOR78@clusterstreaming.w8pyx.mongodb.net/clusterStreaming?retryWrites=true&w=majority")
	 .then(() => console.log("connesion à mongodb réussi"))
	.catch(() => console.log("connexion à mongodb echoué"));
}
database();

const bodyParser = require("body-parser");


app.use(bodyParser.json());



const routeUsers = require("./routes/users");
const routePosts = require("./routes/posts");
const routeComments = require("./routes/comments");

app.use("/", routeUsers);
app.use("/", routePosts);
app.use("/", routeComments);


module.exports = app;


 