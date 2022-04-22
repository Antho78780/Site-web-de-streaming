const modelComments = require("../models/comments");
const modelPosts = require("../models/posts");

exports.comment = (req, res) => {
    modelPosts.findById(req.params.id)
    .then((post) => {
        if(post) {
            console.log(post)
        }
    })

}