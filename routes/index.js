const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/login", Controller.loginPage);

router.get("/register", Controller.registerForm);

router.post("/register", Controller.registerSave)




module.exports = router