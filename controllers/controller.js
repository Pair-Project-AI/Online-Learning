const {User, Video, Subject} = require("../models");
const currency = require("../helper/totalPrice")

class Controller {
    static homePage(req, res){
        Subject
            .findAll({
                include: [{
                    model: Video,
                    attributes: ["price"]
                }]
            })
            .then(data => {
                console.log(data[0].Videos)
                const isLogin = req.session.isLogin;
                res.render("index", {data, isLogin, currency})
            })
            .catch(err => res.send(err))
    }

    static loginPage(req, res){
        const isLogin = req.session.isLogin;
        res.render("login", {isLogin})
    }

    static loginAccept(req, res){
        const {email, password} = req.body;
        User
        .findOne({where: {email}})
        .then(result => {
                req.session.isLogin = true;
                res.redirect("/")
            })
            .catch(err => {
                res.send(err)
            })
    }

    static registerForm(req, res){
        const isLogin = req.session.isLogin;
        res.render("register", {isLogin})
    }

    static registerSave(req, res){
        const { first_name, last_name, email, password} = req.body;
        const newUser = {
            first_name,
            last_name,
            email,
            password
        }
        User
        .create(newUser)
        .then(() => {
                req.session.isLogin = true;
                res.redirect("/")
            })
            .catch(err => {
                res.send(err)
            })
    }

    static showContent(req, res){
        const id = req.params.id;
        Video
            .findAll({
                include: Subject,
                where: {
                    SubjectId: id,
                }
            })
            .then(data => {
                res.render("show-content", {data, currency})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static orderPay(req, res){
        const id = req.params.id;
        Video
            .findAll({
                where: {
                    SubjectId: id,
                }
            })
            .then(data => {
                res.render("order", {data, currency})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static myCourse(req, res){
        Subject
            .findAll({
                where: {
                    paid: true,
                }
            })
            .then(data => {
                res.render("myCourse", {data})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static logOut(req, res){
        req.session.destroy();
        res.redirect("/")
    }

    static upload(req, res) {
        res.send(req.file)
        console.log(req.file)
        console.log(req.body)
        // /public/upload/ + 16-sq.jpg
    }
}

module.exports = Controller