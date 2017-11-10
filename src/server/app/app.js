const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongoose')
const routes = require('./listRoutes.js')
var mongoAddr = "mongodb://127.0.0.1/rpg"
mongodb.connect(mongoAddr, {
  useMongoClient: true
})

const app = express()
const port = 3000

app.all('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  next()
})

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

routes(app)

app.listen(port, function () {
  console.log("Sever listening on port", this.address())
})
