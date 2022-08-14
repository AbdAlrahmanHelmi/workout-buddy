const express = require("express");
const {loginUser,signupUser}=require("../controllers/userController")

const router = express.Router();

// login routs
router.post("/login",loginUser);

//signup routs
router.post("/signup", signupUser);


module.exports = router;
