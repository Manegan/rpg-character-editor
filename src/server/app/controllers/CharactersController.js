var mongoose = require('mongoose')
var Characters = mongoose.model('Characters')

exports.list_all_chars = function (req, res) {
  Task.find({}, function (err, task) {
    if (err) res.send(err)
    res.json(task)
  })
}

exports.create_char = function (req, res) {
  var newChar = new Char(req.body)
  newChar.save(function (err, task) {
    if (err) res.send(err)
    res.json(task)
  })
}
