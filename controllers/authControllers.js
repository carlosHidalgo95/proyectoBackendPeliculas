const jsonwebtoken = require("jsonwebtoken");
const UserModel = require("../models/user.js");
const models = require("../models/index.js");

const {
  assertValidPasswordService,
  assertEmailIsUniqueService,
  assertEmailIsValid,
  createUserService,
  encryptPassword,
} = require("../services/auth.services.js");
/**
 * It takes a user's email and password, checks if the user exists, then checks if the password is
 * correct, then creates a JWT token and sends it back to the user.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The JWT is being returned.
 */
async function authLoginController(req, res) {
  const { email, password } = req.body;
  const userFound = await models.user.findOne({
    where:{ email: email }});
  if (!userFound) {
    res.status(401).json({ message: "Password or email is incorrect" });
    return;
  }
  const hashedPassword = encryptPassword(password);
  if (hashedPassword !== userFound.password) {
    console.log(email,password);
    res.status(401).json({ message: "Password or email is incorrect" });
    return;
  }

  const secret = process.env.JWT_SECRET || '';

  if (secret.length < 10) {
    throw new Error("JWT_SECRET is not set");
  }

/* Creating a JWT token. */
  const jwt = jsonwebtoken.sign({
    id: userFound.id,
    email: userFound.email,
    created: Date.now(),
    role: userFound.role
  }, secret);
  let prueba=jsonwebtoken.decode(jwt,{complete:true});
  console.log(prueba.payload);

  res.status(200).json({
    message: "Login successful",
    jwt: jwt,
  });
  
}
async function authRegisterController(req, res) {
    const body = req.body;
    // validate password
    // try {
    //   assertValidPasswordService(body.password);
    // } catch (error) {
    //   console.error(error);
    //   res.status(400).json({ message: "Invalid password: " + error.message });
    //   return;
    // }
    // validate email is unique
    try {
      await assertEmailIsUniqueService(body.email);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        message: "email is already registered: " + error.message,
      });
      return;
    }
    // save user
    try {
      const userCreated = await createUserService(body);
      console.log("creado");
      res.status(201).json(userCreated);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
  
module.exports = {
  authLoginController,
  authRegisterController,
};
