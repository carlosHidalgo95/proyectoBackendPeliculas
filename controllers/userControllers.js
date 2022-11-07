const models = require('../models/index');
const { Op } = require("sequelize");
const {findUser,deleteUser}=require("../services/user.services")

const userController = {}

userController.getUser = async (req, res) => {
    let data=req.auth;
    let resp=findUser(data.email);
    res.send(resp);
}

/* This is a function that is getting a movie by its id. */
// userController.getUsersById = async (req, res) => {
//     let resp = await models.user.findAll({ 
//         where: { 
//             id: req.params.id 
//         }
//      });
//     res.send(resp);
// }

userController.deleteUser=async(req,res)=>{
    try{
        let data=req.auth;
        // let resp=await models.user.destroy({
        //     where: {
        //     email:data.email,
        //     }
        // });
        let resp=deleteUser(data.email);
        res.json({ message: "Se ha elminado el usuario correctamente" })
    }catch{
        res.json({ message: "Ha ocurrido un error" })

    }
}

module.exports = userController;