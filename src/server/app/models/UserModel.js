var mongoose = require('mongoose')
var schema = mongoose.Schema

var UserModel = new schema({
  username: {type: String},
  passwordHash: {type: String}
})

export default UserModel
