const models = require('../models/index');
const { Op } = require("sequelize");
const {findUser,deleteUser,updateUser}=require("../services/user.services")
const {encryptPassword}=require('../services/auth.services')

const userController = {}

//CREAR USUARIO

userController.getUser = async (req, res) => {
    try {
        let data=req.auth;
        let resp=await findUser(data.email);
        res.send(resp);
    } catch (error) {
        res.send()
    }

}

//MODIFICAR USUARIO

userController.deleteUser=async(req,res)=>{
    try{
        let data=req.auth;
        let resp=await deleteUser(data.email);
        res.json({ message: "Se ha elminado el usuario correctamente" })
    }catch{
        res.json({ message: "Ha ocurrido un error" })

    }
}

//ACTUALIZAR USUARIO

userController.updateUser = async (req, res) => {
    let user = req.body
    let searchUser =await findUser(req.auth.email);
    
    let newPassword = searchUser.password;
    let newEmail=searchUser.email;
    if (user.password) {
        newPassword = encryptPassword(user.password)
    }

    if (user.email){
        newEmail=user.email;
    }

    let resp =await updateUser(req.auth.email,newEmail,newPassword);
    res.json({
        resp, message: "El usuario se ha modificado correctamente"
    })
};

module.exports = userController;