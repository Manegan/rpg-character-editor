module.exports = function (app) {
  var charactersController = require("./controllers/CharactersController")

  app.route('/characters')
    .get(charactersController.list_all_chars)
    .post(charactersController.create_char)
}
