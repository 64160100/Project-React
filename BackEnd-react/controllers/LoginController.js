const usermodel = require('../models/LoginModel');
const bcrypt = require('bcrypt');

module.exports = {
	loginStage: (req, res) => {

		const inputData = {
			username: req.body.username,
			password: req.body.password,
		};
		usermodel.validateUsername(inputData, (error, result) => {
			if (error) {
				console.error('Error validating username:', error);
				return res.status(500).json({
					message: 'Internal Server Error',
				});
			}
			if (!result) {
				req.flash('error', 'Username does not exist1');
				return res.status(200).json({ messages: req.flash('error') });
			}
			// ...
			usermodel.login(inputData, (error, result) => {
				
				if (error) {
				  console.error('Error logging in:', error);
				  return res.status(500).json({
					message: 'Internal Server Error',
				  });
				}
				if (!result) {
				  return res.status(200).json({ message: 'Username does not exist 2' });
				}
				if (!bcrypt.compareSync(inputData.password, result.password)) {
				  return res.status(200).json({ message: 'Invalid password' });
				}
				return res.status(200).json({ user: result });
			  });
		});
	}
};
