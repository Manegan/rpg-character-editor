module.exports = function (app) {
  var charactersController = require('./controllers/CharactersController')
  var loginController = require('./controllers/LoginController')

  app.route('/characters')
    .get(charactersController.list_all_chars)
    .post(charactersController.create_char)

  app.route('/login')
     .post(loginController.user_login)

  app.route('/login/createAccount')
     .post(loginController.create_account)
}
