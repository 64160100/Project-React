const express = require('express');
const userController = require('../controllers/LoginController');
const router = express.Router();

router.post('/login', userController.loginStage);

module.exports = router;