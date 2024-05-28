const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const flash = require('express-flash');
const session = require('express-session');

const app = express();
app.use(session({
  secret: 'keyboard',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60*60*1000 }
}));

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use(flash());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", require('./routes/login'));

app.listen(4000, () => {
  console.log("Server running on port 4000");
});