const modelUsers = require("../models/users");
const bcrypt = require("bcrypt");

exports.login = (req, res) => {
    modelUsers.findOne({
        email: req.body.email
    })
    .then((user) =>{
        if(user) {
            bcrypt.compare(req.body.mdp, user.password, function(err, result) {
                if(result) {
                    res.status(200).json({message: "Compte connecté"})
                }
                else {
                    res.status(400).json({error: "compte inccorect"})
                }
            })
        }
        else {
            res.status(400).json({error: "Email incorrect"})
        }
    })
} 

exports.register = (req, res) => {
    bcrypt.hash(req.body.mdp, 10 , function(err, hash) {
        modelUsers.create({
            pseudo: req.body.pseudo,
            email: req.body.email,
            password: hash
       })
       .then((createUser) => {
           res.status(201).json(createUser);
       })
    })
}