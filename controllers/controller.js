const {User, Video} = require("../models");
const bcrypt = require("bcryptjs");

class Controller {
    static homePage(req, res){
        Video
            .findAll()
            .then()
            .catch()
    }

    static loginPage(req, res){
        
    }

    static loginAccept(req, res){
        const {email, password} = req.body;
        User
            .findOne({where: {email}})
            .then()
            .catch()
    }

    static registerForm(req, res){
        res.render("")
    }

    static registerSave(req, res){
        const { first_name, last_name, email, password} = req.body;
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        const newUser = {
            first_name,
            last_name,
            email,
            password: hash
        }
        User
            .create(newUser)
            .then(() => {
                res.redirect("/")
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = Controller