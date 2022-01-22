const UserService = require('./user.service');
const Constants = require('../utils/constant');

class UserController {

    async addUser(req, res, next) {
        try {
            let exist = await UserService.getSingleUser({ email: req.body.email });
            if (exist) {
                res.status(400).send({ errMsg: Constants.MESSAGE.EMAIL_ALREADY_EXIST });
            } else {
                let data = await UserService.addUser(req.body);
                res.status(200).send({ data: data });
            }
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async getAllUsers(req, res, next) {
        try {
            let filter = req.query;
            let data = await UserService.getAllUsers(filter);
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async getSingleUser(req, res, next) {
        try {
            let id = req.params.id;
            let data = await UserService.getSingleUser({ id });
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_FETCHED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async updateUser(req, res, next) {
        try {
            let id = req.params.id;
            let exist = await UserService.getSingleUser({ email: req.body.email });
            if (exist) {
                if (exist.id.toString() === id.toString()) {
                    let data = await UserService.updateUser({ id }, req.body);
                    res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_UPDATED });
                } else {
                    res.status(400).send({ errMsg: Constants.MESSAGE.EMAIL_ALREADY_EXIST });
                }
            } else {
                let data = await UserService.updateUser({ id }, req.body);
                res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_UPDATED });
            }
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }

    async removeSingleUser(req, res, next) {
        try {
            let id = req.params.id;
            let data = await UserService.removeSingleUser({ id });
            res.status(200).send({ data: data, message: Constants.MESSAGE.DETAIL_REMOVED });
        } catch (err) {
            res.status(400).send({ errMsg: err.message })
        }
    }
    
}

module.exports = new UserController();