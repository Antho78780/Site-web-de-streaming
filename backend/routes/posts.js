const express = require("express");

const router = express.Router();

const controllersPosts = require("../controllers/posts");

router.post("/createPost", controllersPosts.createPost)


module.exports = router;