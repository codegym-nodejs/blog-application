const UserModel = require('../model/User');
const bcrypt = require('bcrypt');
exports.userRegister = async function(req, res, next) {
    UserModel.create(req.body, (err, user) => {
        if (err) res.redirect('/user/register')
        if (user) {
            res.redirect('/user/login');
        }
    })
}

exports.userLogin = async function(req, res, next) {
    let { username, password } = req.body;
    UserModel.findOne({ username: username }, (err, user) => {
        console.log(err);

        if (user) {
            bcrypt.compare(password, user.password, (err, same) => {
                if (same)
                    res.redirect('/');
                else
                    res.redirect('/user/login');
            })
        } else {
            res.redirect('/user/login');
        }
    })
}