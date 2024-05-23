const express = require("express");
const mysql = require("mysql2");
var cors = require("cors");
const bodyParser = require("body-parser");

// Create the Express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a connection to the MySQL database
const mysqlConfig = {
  host: process.env.DB_HOST || "db",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "mydb",
};

app.post("/login", (req, res) => {
  const authenticated = true;
  const { username, password } = req.body;
  if (authenticated) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
