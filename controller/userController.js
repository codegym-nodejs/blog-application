const UserModel = require('../model/User');

exports.userRegister = async function(req, res, next) {
  UserModel.create(req.body, (err, user) => {
    if(err) res.redirect('/user/register')
    if(user) {
      res.redirect('/user/login');
    }
  })
}

