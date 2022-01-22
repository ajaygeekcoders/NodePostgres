const JWT = require('./jwt');

const UserService = require('../user/user.service');

module.exports = function (req, res, next) {
    let authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).send({ message: "Token is missing" });
    }
    JWT.verifyToken(authToken, async (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Token is expired", err });
        }
        req['decoded'] = decoded;
        console.log({decoded})
        let userData = await UserService.getSingleUser({ id: decoded.id });
        if (!userData) {
            return res.status(401).send({ message: "User is not active" });
        }
        req['user'] = userData;
        console.log({userData})
        console.log({ decoded, userData });
        next();
    });
}