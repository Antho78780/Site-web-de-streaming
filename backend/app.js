
const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next()
})
	
function database() {
	dotenv.config()
	 mongoose.connect(`mongodb+srv://${process.env.pseudo}:${process.env.password}@clusterstreaming.w8pyx.mongodb.net/${process.env.cluster}?retryWrites=true&w=majority`)
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


 