const modelPosts = require("../models/posts");

exports.createPost = (req, res) => {
    console.log(req.body);
    modelPosts.create({
        post: req.body.post,
        like: 0,
        dislike: 0
    })
    .then((createPost) => {
        res.status(201).json(createPost);
    })
}