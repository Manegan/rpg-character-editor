const Character = require('../models/CharacterModel.js')

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
  var newChar = Chararacter.create_char(req.body)
  newChar.save(function (err, char) {
    if (err) res.send(err)
    res.json({result: "SUCCESS"})
  })
}
