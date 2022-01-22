const req = require('express/lib/request');
const UserService = require('../user/user.service');
const Constant = require('../utils/constant');
const JWT = require('../middleware/jwt');
const Utils = require('../utils/utility');
class AuthController {
    
    async login(req, res, next){
        let email = req.body.email;
        let password = req.body.password;
        let userDetail = await UserService.getSingleUser({ email, password });
        if(userDetail){
            userDetail['password'] = null;
            let payload = { id: userDetail.id };
            let token = JWT.generateToken(payload);
            req.logger.info('Logged in successfully');
            res.status(200).send({ data: userDetail, token, message: 'Logged in successfully' })
        } else {
            req.logger.error(Constant.MESSAGE.INVALID_LOGIN_CRED)
            res.status(400).send({ message: Constant.MESSAGE.INVALID_LOGIN_CRED })
        }
    }

    async forgotPassword(req, res, next){
        let email = req.body.email;
        let userDetail = await UserService.getSingleUser({ email });
        if(userDetail) {
            let resetCode = Utils.getCode(5);
            let update = await UserService.updateUser({ email }, { resetCode : resetCode });
            res.status(200).send({ resetCode, update, message: 'Email is sent for reset password' })
        } else {
            res.status(400).send({ message: Constant.MESSAGE.EMAIL_NOT_EXIST })
        }
    } 
    
    async resetPassword(req, res, next){
        let email = req.body.email;
        let resetCode = req.body.resetCode;
        let password = req.body.password;
        let userDetail = await UserService.getSingleUser({ email, resetCode });
        if(userDetail) {
            let update = await UserService.updateUser({ _id: userDetail._id }, { resetCode : "", password  });
            res.status(200).send({ message: 'Password changed successfully' })
        } else {
            res.status(400).send({ message: Constant.MESSAGE.INVALID_RESET_CODE })
        }
    } 

}

module.exports = new AuthController();