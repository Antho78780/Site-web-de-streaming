const modelPosts = require("../models/posts");

exports.createPost = (req, res) => {
    console.log(req.body);
    modelPosts.create({
        post: req.body.post,
        like: req.body.like,
        dislike: req.body.dislike
    })
    .then((createPost) => {
        res.status(201).json(createPost);
    })
}