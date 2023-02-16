const jwt = require("jsonwebtoken");
require("dotenv").config();
//this middleware will on continue on if the token is inside the local storage
module.exports = async (req, res, next) => {
  // get token from header
  const jwtToken = req.header("token");

  // check if not token
  if (!jwtToken) {
    return res.status(403).json({ msg: "authorization denied" });
  }
  //verify token
  try {
    // to give the user id
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    req.user = payload.user;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(403).json({ msg: "Token is not valid" });
  }
};
