const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myreact',
    port: 3306,
  });
  
  // Connect to the MySQL database
  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to the database: ', error);
    } else {
      console.log('Connected to the database');
    }
  });
  
module.exports = connection;
