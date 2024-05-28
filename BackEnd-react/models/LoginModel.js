const connection = require('./ConMysql');
const bcypt = require('bcrypt');

module.exports = {
  validateUsername: function (inputData, callback) {
    const { username } = inputData;
    const query = 'SELECT * FROM users WHERE username = ?';
    connection.query(query, [username], (error, results) => {
      if (error) {
        console.error('Error fetching user:', error);
        return callback(error, null);
      }

      if (results.length > 0) {
        return callback(null, results[0]);
      }

      return callback(null, null);
    });
  },
  login: function (inputData, callback) {
    const { username, password } = inputData;
    const query = `SELECT * FROM users WHERE username = '${username}'`;

    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching user:', error);
        return callback(error, null);
      }

      if (results.length > 0) {

        const user = results[0];
        console.log("user: ", bcypt.compareSync(password, user.password));
        const isPasswordMatch = bcypt.compareSync(password, user.password);
        console.log("is :" ,isPasswordMatch);
        if (isPasswordMatch) {
          return callback(null, user);
        }
      }

      return callback(null, null);
    });
  },

}



