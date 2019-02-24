const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes/index")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const Subscriber = require("./models/subscribe")
const app = express()
const connect = require('connect')


mongoose.connect(
  "mongodb://localhost:27017/medium",
  { useCreateIndex: true,
    useNewUrlParser: true }
)
var db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

// use sessions for tracking logins
app.use(session({
  secret: 'medium',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

app.use((req, res, next) => {
  res.locals.currentUser = req.session.userId
  next()
})



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", routes)

app.set("view engine", "pug")
app.set("views", __dirname + "/views")
app.use(express.static(__dirname + "/public"))




app.listen(3000, () => {
  console.log("Express app listening on port 3000")
})
