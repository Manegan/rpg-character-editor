var mongoose = require('mongoose')
var schema = mongoose.Schema

const UserSchema = new schema({
  username: {type: String},
  passwordHash: {type: String}
})

const User = mongoose.model('user', UserSchema)

exports.create_user = function (user) {
  return new User(user)
}

exports.find = function (req, cb) {
  User.find(req, cb)
}

exports.findOne = function (req, cb) {
  User.findOne(req, cb)
}
