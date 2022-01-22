const apiRoutes = require('express').Router();
const AuthController = require('./auth.controller');


apiRoutes.post('/login', AuthController.login);
apiRoutes.post('/forgot.password', AuthController.forgotPassword);
apiRoutes.post('/reset.password', AuthController.resetPassword);

module.exports = apiRoutes;