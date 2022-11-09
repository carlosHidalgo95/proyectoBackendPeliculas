const models = require("../models/index");

function findOrder(email){
    let resp =  models.user.findOne({
        where: {
            email
        }
    });
    return resp;
}

module.exports={findOrder};