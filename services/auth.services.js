const models = require("../models/index");
const crypto = require("node:crypto");
const { REPL_MODE_SLOPPY } = require("node:repl");

// Comprobar si el email está registrado.

async function assertEmailIsUniqueService(email) {
  // validate email is unique
  const user = await models.user.findOne({
    where:{ email: email }});
  if (user) {
    throw new Error("Email is already registered");
  }
}

 // Crea un usuario.

async function createUserService(userBody) {
  let day;
  const hash = encryptPassword(userBody.password);
  console.log(userBody);
  console.log("-----------------------------");
  console.log(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  console.log("-----------------------------");
  day=new Date().getDay();
  if (day=="0") {
    day=`0${new Date.getDate()}`;
  }
  console.log(day);
  console.log("-----------------------------");
  userBody.password = hash;
  let created=await models.user.create({
    username:userBody.username,
    email:userBody.email,
    dob:userBody.dob,
    password:hash,
    id_role:2,
    createdAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    updatedAt: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  });

  return created;
}

  //Recibe un string y los hashea.

function encryptPassword(password) {
  const hash = crypto
    .createHmac("sha512", 'no salt for now // TODO: REALLY NEED TO ADD SALT?')
    .update(password)
    .digest("base64");
  return hash;
}

//Verificar token

function verifyToken(req,res,next){
const bearerHeader= req.headers['authorization'];
if(typeof bearerHeader!=="undefined"){
   const token= bearerHeader.split(" ")[1];
   req.token=token;
   next();
}else{
    res.sendStatus(403);
}
}

async function isValidUserAndPassword(user, pass) {
    const userFound = await models.user.findOne({ email: user });
    if (userFound) {
      const hash = encryptPassword(pass);
      return hash === userFound.password;
    }
    return false;
  }

module.exports = {
  assertEmailIsUniqueService,
  createUserService,
  encryptPassword,
  verifyToken,
  isValidUserAndPassword
};
