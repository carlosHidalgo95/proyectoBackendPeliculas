const jsonwebtoken = require("jsonwebtoken");

async function authLoginController(req, res) {
  const { email, password } = req.body;
  const userFound = await UserModel.findOne({ email: email });
  if (!userFound) {
    res.status(401).json({ message: "Password or email is incorrect" });
    return;
  }
  const hashedPassword = encryptPassword(password);
  if (hashedPassword !== userFound.password) {
    res.status(401).json({ message: "Password or email is incorrect" });
    return;
  }

  const secret = process.env.JWT_SECRET || '';

  if (secret.length < 10) {
    throw new Error("JWT_SECRET is not set");
  }

  const jwt = jsonwebtoken.sign({
    // uuid: userFound.uuid,
    email: userFound.email,
    created: Date.now(),
    role: userFound.role,
  }, secret);

  res.status(200).json({
    message: "Login successful",
    jwt: jwt,
  });
}