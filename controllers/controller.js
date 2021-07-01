const {User, Video} = require("../models");

class Controller {
    static homePage(req, res){
        Video
            .findAll()
            .then(data => {
                const isLogin = req.session.isLogin;
                res.render("index", {data, isLogin})
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

    static logOut(req, res){
        req.session.destroy();
        res.redirect("/")
    }
}

module.exports = Controller