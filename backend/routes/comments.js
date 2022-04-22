const express = require("express");

const router = express.Router();

const controllersComments = require("../controllers/comments");

router.post("/comments/:id", controllersComments.comment)

module.exports = router;