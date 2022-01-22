const apiRoutes = require('express').Router();
const StudentController = require('./student.controller');
const StudentValiator = require('./student.validator');

apiRoutes.post('/', StudentValiator.addStudent, StudentController.addStudent);
apiRoutes.get('/', StudentController.getAllStudents);
apiRoutes.get('/:id', StudentController.getSingleStudent);
apiRoutes.put('/:id', StudentController.updateStudent);
apiRoutes.delete('/:id', StudentController.removeSingleStudent);


module.exports = apiRoutes;