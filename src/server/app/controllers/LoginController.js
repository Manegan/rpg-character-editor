var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

var schema = mongoose.Schema
 // apparement il faut tout dans le même fichier pour le model, à tenter : mettre le model et exporter un const du model
var UserSchema = new schema({
  username: {type: String},
  passwordHash: {type: String}
})

var User = mongoose.model('user', UserSchema)

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
  let hash = bcrypt.hashSync(req.body.password, 10)
  var userObj = new User({username: req.body.username, passwordHash: hash})
  console.log(userObj)

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
