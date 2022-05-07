const modelUsers = require("../models/users");
const bcrypt = require("bcrypt");

exports.login = (req, res) => {
    console.log(req.body.pseudo)
    modelUsers.findOne({
        pseudo: req.body.pseudo
    })
    .then((user) =>{
        if(user) {
            bcrypt.compare(req.body.mdp, user.password, function(err, result) {
                if(result) {
                    res.status(200).json({message: "Compte connecté"})
                }
                else {
                    res.status(400).json({error: "mot de passe inccorect"})
                }
            })
        }
        else {
            res.status(400).json({error: "username incorrect"})
        }
    })
    .catch(err => res.status(err))
} 

exports.register = (req, res) => {
    bcrypt.hash(req.body.mdp, 10 , function(err, hash) {
        modelUsers.create({
            pseudo: req.body.pseudo,
            email: req.body.email,
            password: hash
       })
       .then((user) => {
           console.log(user)
           res.status(201).json({message: "Compte enregistrer"});
       })
       .catch((errUser) => {
           if(errUser.errors.pseudo) {
            res.status(404).json({error: "Pseudo deja utilisé"})
           }
           else {
               res.status(404).json({error: "Email deja utilisé"})
           }
       })
    })
}