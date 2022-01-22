
const SchoolModel = require('./school.model');

class SchoolService {

    addSchool(params) {
        let school = new SchoolModel(params);
        return school.save();
    }

    getAllSchools(filter = {}) {
        filter['isActive'] = true;
        return SchoolModel.findAll({ where: filter});
    }

    getSingleSchool(filter = {}) {
        filter['isActive'] = true;
        return SchoolModel.findOne({ where: filter});
    }

    updateSchool(query = {}, detail = {}) {
        detail['updatedAt'] = new Date();
        return SchoolModel.update(detail, { where: query });
    }

    removeSingleSchool(filter = {}) {
        return SchoolModel.destroy({ where: filter});
    }

}

module.exports = new SchoolService();