const mongoose = require("mongoose");

const {Schema} = mongoose;

const schemaComment = new Schema({
    idPost: String,
})

const comments = mongoose.model("comments", schemaComment);

module.exports = comments