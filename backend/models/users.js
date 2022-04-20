    const mongoose = require("mongoose");

    const {Schema} = mongoose;

    const usersSchema = new Schema({
        pseudo: String,
        email: String,
        password: String
    })

    const users = mongoose.model("Users", usersSchema);

    module.exports = users;




