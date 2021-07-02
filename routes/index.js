const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
// upload file
const multer  = require('multer')
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/upload');
    },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
var upload = multer({ storage: storage })

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

router.use(proceed);

router.post("/upload/:id", upload.single('file'), Controller.upload);

router.get("/paid/:id", Controller.paidStatus);

router.get("/show-content/:id", Controller.showContent);

router.get("/order/:id", Controller.orderPay);

router.get("/my-course", Controller.myCourse);

router.get("/finish/:id", Controller.finishedSubject);

router.get("/logout", Controller.logOut);


module.exports = router