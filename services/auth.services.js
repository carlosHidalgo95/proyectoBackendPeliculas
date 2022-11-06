const models = require("../models/index");
const crypto = require("node:crypto");
const { REPL_MODE_SLOPPY } = require("node:repl");

// This function will throw an error if the email is already registered.

async function assertEmailIsUniqueService(email) {
  // validate email is unique
  const user = await models.user.findOne({
    where:{ email: email }});
  if (user) {
    throw new Error("Email is already registered");
  }
}

 // It creates a user in the database with the email and password provided in the userBody object.
async function createUserService(userBody) {
  const hash = encryptPassword(userBody.password);
  userBody.password = hash;
  let created=await models.user.create({
    email:userBody.email,
    password:hash,
    id_rol:2
  });
  return created;
}

 // It checks if the email is valid.
function assertEmailIsValid(email) {
  // must validate a valid email
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = email.match(emailRegex);
  if (!isValid) {
    throw new Error("Email is invalid");
  }
}

  //This function takes a password as a string, and returns a hash of that password as a string.
function encryptPassword(password) {
  const hash = crypto
    .createHmac("sha512", 'no salt for now // TODO: REALLY NEED TO ADD SALT?')
    .update(password)
    .digest("base64");
  return hash;
}

function verifyToken(req,res,next){
    console.log("Al menos lo intenta");
const bearerHeader= req.headers['authorization'];
if(typeof bearerHeader!=="undefined"){
   const token= bearerHeader.split(" ")[1];
   req.token=token;
   next();
}else{
    res.sendStatus(403);
}
}

module.exports = {
  assertEmailIsUniqueService,
  assertEmailIsValid,
  createUserService,
  encryptPassword,
  verifyToken
};
