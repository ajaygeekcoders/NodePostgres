const apiRoutes = require('express').Router();
const UserController = require('./user.controller');

apiRoutes.post('/', UserController.addUser);
apiRoutes.get('/', UserController.getAllUsers);
apiRoutes.get('/:id', UserController.getSingleUser);
apiRoutes.put('/:id', UserController.updateUser);
apiRoutes.delete('/:id', UserController.removeSingleUser);

module.exports = apiRoutes;