const apiRoutes = require('express').Router();
const SchoolController = require('./school.controller');


apiRoutes.post('/', SchoolController.addSchool);
apiRoutes.get('/', SchoolController.getAllSchools);
apiRoutes.get('/:id', SchoolController.getSingleSchool);
apiRoutes.put('/:id', SchoolController.updateSchool);
apiRoutes.delete('/:id', SchoolController.removeSingleSchool);


module.exports = apiRoutes;