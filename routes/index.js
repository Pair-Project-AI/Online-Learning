const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/login", Controller.loginPage);

router.post("/login", Controller.loginAccept);

router.get("/register", Controller.registerForm);

router.post("/register", Controller.registerSave);

router.get("/", Controller.homePage);  


module.exports = router