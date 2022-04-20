const mongoose = require("mongoose");

const {Schema} = mongoose;

const schemaPosts = new Schema({
    post: String,
    like: Number,
    dislike: Number
})

const posts = mongoose.model("Posts", schemaPosts);

module.exports = posts;

