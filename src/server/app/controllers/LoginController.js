var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel.js')
var User = mongoose.model('user', UserModel)

exports.user_login = function (req, res) {
  User.find({username: req.body.username}, function (err, user) {
    if (err) res.send(err)
    if (bcrypt.compareSync(req.body.password, user.passwordHash)) {
      res.json({isLoggedIn: true, username: req.body.username})
    } else {
      res.json({isLoggedIn: false})
    }
  })
}

exports.create_account = function (req, res) {
  User.find({username: req.body.username}, function (err, user) {
    if (!user.username) {
      let hash = bcrypt.hashSync(req.body.password, 10)
      var user = new User({username: req.body.username, passwordHash: hash})
      user.save(function (err, user) {
        if (err) {
          res.send(err)
          return
        }
        res.json({result: "SUCCESS"})
      })
    }
  })
}
