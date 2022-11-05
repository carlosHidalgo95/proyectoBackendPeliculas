const models = require('../models/index');
const { Op } = require("sequelize");

const userController = {}

userController.getUser = async (req, res) => {
    let resp = await models.user.findAll();
    res.send(resp);
}

/* This is a function that is getting a movie by its id. */
userController.getUsersById = async (req, res) => {
    let resp = await models.user.findAll({ 
        where: { 
            id: req.params.id 
        }
     });
    res.send(resp);
}

userController.createUser=async(req,res)=>{
    let data=req.body;
    console.log(data);
    console.log("-------");
    console.log(data.email+"-"+data.password);
    let resp = await models.user.create({
        email: data.email,
        password: data.password
      });
      res.send(resp);
}

userController.deleteUser=async(req,res)=>{
    let data=req.body;
    console.log(data);
    console.log("-------");
    console.log(data.email+"-"+data.password);
    let resp=await models.user.destroy({
        where: {
        email:data.email,
        password:data.password
        }
    });
    res.send("borrado");
}

module.exports = userController;