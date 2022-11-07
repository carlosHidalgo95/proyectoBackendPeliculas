const models = require("../models/index");

function findUser(email){
    let resp =  models.user.findOne({
        where: {
            email
        }
    });
    return resp;
}

function deleteUser(email){
    let resp= models.user.destroy({
        where: {
        email,
        }
    });
    return resp;
}

module.exports={findUser,deleteUser};