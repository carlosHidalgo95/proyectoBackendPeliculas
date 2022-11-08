const models = require('../models/index');
const { Op } = require("sequelize");
const {findUser,deleteUser,updateUser}=require("../services/user.services")
const {encryptPassword}=require('../services/auth.services')

const userController = {}

userController.getUser = async (req, res) => {
    let data=req.auth;
    let resp=findUser(data.email);
    res.send(resp);
}

userController.deleteUser=async(req,res)=>{
    try{
        let data=req.auth;
        let resp=deleteUser(data.email);
        res.json({ message: "Se ha elminado el usuario correctamente" })
    }catch{
        res.json({ message: "Ha ocurrido un error" })

    }
}

userController.updateUser = async (req, res) => {
    let user = req.body
    let searchUser = findUser(req.auth.email);
    
    let newPassword = searchUser.password;
    let newEmail=searchUser.email;
    if (user.password) {
        newPassword = encryptPassword(user.password)
    }

    if (user.email){
        newEmail=user.email;
    }

    let resp = updateUser(req.auth.email,newEmail,newPassword);
    res.json({
        resp, message: "El usuario se ha modificado correctamente"
    })
};

module.exports = userController;