const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

// register

router.post("/register", validInfo, async (req, res) => {
  //1.destructure the req.body
  const { name, phone, email, password, confirm } = req.body;
  //2.Check if the user exists(if user exist throw error)
  try {
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rows.length > 0) {
      return res.status(401).json("User already exists");
    }
    //3. Bycrpt the user password

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    //4.Enter the new inside our db
    let newUser = await pool.query(
      "INSERT INTO users(user_name,user_phone,user_email,user_password,user_confirm) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [name, phone, email, bcryptPassword, bcryptPassword]
    );

    // res.json(newUser.rows[0]);
    //5.Generating jwt token

    const token = jwtGenerator(newUser.rows[0].user_id);
    return res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server @ register @jwtAuth Error");
  }
});

// Login Route

router.post("/login", validInfo, async (req, res) => {
  //1.destructure the req.body
  const { email, password } = req.body;
  try {
    //2.If user doesn't exist
    const user = await pool.query("SELECT * FROM users WHERE user_email=$1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("Password or email is incorrect");
    }
    //3.Check if incoming password is same as the db password

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );
    // console.log(validPassword);
    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    //4.Give jwt token

    const token = jwtGenerator(user.rows[0].user_id);
    return res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Login Error");
  }
});

router.get("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Verification Error");
  }
});

module.exports = router;
