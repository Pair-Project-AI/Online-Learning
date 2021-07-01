const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

const proceed = (req, res, next) => {
    if(req.session.isLogin){
        next();
    } else {
        res.redirect("/login")
    }
}

router.get("/login", Controller.loginPage);

router.post("/login", Controller.loginAccept);

router.get("/register", Controller.registerForm);

router.post("/register", Controller.registerSave);

router.get("/", Controller.homePage);

router.get("/show-content/:id", Controller.showContent);

router.get("/order/:id", Controller.orderPay);

router.get("/my-course", Controller.myCourse)
// router.use(proceed)

router.get("/logout", Controller.logOut);


module.exports = router