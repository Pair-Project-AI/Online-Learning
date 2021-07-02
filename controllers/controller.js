const {User, Video, Subject} = require("../models");
const currency = require("../helper/totalPrice");
const bcrypt = require("bcryptjs");

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
        let match;
        User
            .findOne({where: {email}})
            .then(result => {
                const hash = result.password;
                match = bcrypt.compareSync(password,hash);
                if(match){
                    return match
                } else {
                    throw new Error("Password salah")
                }
            })
            .then(() => {
                req.session.isLogin = true;
                res.redirect("/")
            })
            .catch(err => {
                res.redirect("/login")
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
                const isLogin = req.session.isLogin;
                res.render("show-content", {data, isLogin, currency})
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
                const isLogin = req.session.isLogin;
                res.render("order", {data, isLogin, currency, id})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static paidStatus(req, res){
        const id = req.params.id;
        Subject
            .update({paid: true}, {
                where:{id}
            })
            .then(() => {
                res.redirect("/my-course")
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
                const isLogin = req.session.isLogin;
                res.render("myCourse", {data, isLogin})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static finishedSubject(req, res){
        const id = req.params.id;
        Subject
            .update({paid: 0}, {
                where: {id}
            })
            .then(() => {
                res.redirect("/my-course")
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