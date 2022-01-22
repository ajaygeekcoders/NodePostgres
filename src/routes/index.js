const AuthRoutes = require('../auth/auth.route');
const UserRoutes = require('../user/user.route');
const SchoolRoutes = require('../school/school.route');
const StudentRoutes = require('../student/student.route');

const TokenValidator = require('../middleware/tokenValidator');
module.exports = function(app){
    app.use('/api/auth', AuthRoutes);
    app.use(TokenValidator); //  Below this, all api needed Authorization token in header
    app.use('/api/user', UserRoutes);
    app.use('/api/school', SchoolRoutes);
    app.use('/api/student', StudentRoutes);
}