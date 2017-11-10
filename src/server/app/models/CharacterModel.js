var mongoose = require('mongoose')
var schema = mongoose.Schema

const CharacterSchema = new schema({}, {strict: false})

const Character = mongoose.model('character', CharacterSchema)

exports.create_char = function (char) {
  return new Character(char)
}

exports.find = function (req, cb) {
  Chararacter.find(req, cb)
}
