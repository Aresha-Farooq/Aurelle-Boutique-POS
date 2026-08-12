const express = require("express");

const router = express.Router();

const {
signup
}=require("../Controller/authController");
const {
login
}=require("../Controller/loginController");

router.post("/signup",signup);

router.post("/login",login);

module.exports = router;