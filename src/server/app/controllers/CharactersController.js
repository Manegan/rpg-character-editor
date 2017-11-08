var mongoose = require('mongoose')
var Character = mongoose.model('characters', require('../models/CharacterModel.js'))

exports.list_all_chars = function (req, res) {
  Character.find({}, function (err, task) {
    if (err) {
      console.log("Error", err)
      res.send(err)
    }
    res.json(task)
  })
}

exports.create_char = function (req, res) {
  var newChar = new Chararacter(req.body)
  newChar.save(function (err, task) {
    if (err) res.send(err)
    res.json({result: "SUCCESS"})
  })
}
