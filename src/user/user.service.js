
const UserModel = require('./user.model');

class UserService {

    addUser(params) {
        let user = new UserModel(params);
        return user.save();
    }

    getAllUsers(filter = {}) {
        filter['isActive'] = true;
        return UserModel.findAll({ where: filter});
    }

    getSingleUser(filter = {}) {
        filter['isActive'] = true;
        return UserModel.findOne({ where: filter});
    }

    updateUser(query = {}, detail = {}) {
        detail['updatedAt'] = new Date();
        return UserModel.update(detail, { where: query });
    }

    removeSingleUser(filter = {}) {
        return UserModel.destroy({ where: filter});
    }

}

module.exports = new UserService();