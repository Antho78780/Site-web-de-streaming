    const mongoose = require("mongoose");
    const uniqueValidator = require("mongoose-unique-validator")

    const {Schema} = mongoose;

    const usersSchema = new Schema({
        pseudo: {  type : String ,  required : true ,  unique : true  }, 
        email: {  type : String ,  required : true ,  unique : true  } ,
        password:{  type : String ,  required : true ,} 
    })
    usersSchema.plugin(uniqueValidator);

    const users = mongoose.model("Users", usersSchema);

    module.exports = users;




