const db = require("../models")
const User = db.user

//get all users

exports.getAll = (req, res)=>{
    User.find()
        .then(data=>{
            res.send(data)
            console.log(data)
        })
}

//create a user

exports.create = async (req, res)=>{
    if(!req.body){
        res.status(400).send("Cannot add without info")
        return;
    }


    
}