
const StudentModel = require('./student.model');

class StudentService {

    addStudent(params) {
        let student = new StudentModel(params);
        return student.save();
    }

    getAllStudents(filter = {}) {
        filter['isActive'] = true;
        return StudentModel.findAll({ where: filter});
    }

    getSingleStudent(filter = {}) {
        return StudentModel.findOne({ where: filter});
    }

    updateStudent(query = {}, detail = {}) {
        detail['updatedAt'] = new Date();
        return StudentModel.update(detail, { where: query });
    }

    removeSingleStudent(filter = {}) {
        return StudentModel.destroy({ where: filter});
    }

}

module.exports = new StudentService();