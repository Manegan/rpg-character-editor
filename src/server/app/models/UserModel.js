var mongoose = require('mongoose')
var schema = mongoose.Schema

var UserModel = new schema({
  username: String,
  passwordHash: String
})

export default UserModel
