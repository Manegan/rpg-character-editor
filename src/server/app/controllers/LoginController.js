var bcrypt = require('bcrypt')
const User = require('../models/UserModel.js')

exports.user_login = function (req, res) {
  console.log(User)
  User.findOne({username: req.body.username}, function (err, user) {
    if (err) res.send(err)
    console.log(req.body)
    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
      res.json({isLoggedIn: true, username: req.body.username})
    } else {
      res.json({isLoggedIn: false})
    }
  })
}

exports.create_account = function (req, res) {
  let hash = bcrypt.hashSync(req.body.password, 10)
  var userObj = User.create_user({username: req.body.username, passwordHash: hash})

  User.find({username: req.body.username}, function (err, user) {
    if (!user.username) {
      userObj.save(function (err, userIns) {
        if (err) {
          res.send(err)
          return
        }
        res.json(userIns)
      })
    } else {
      res.json({result: "FAILED"})
    }
  })
}
