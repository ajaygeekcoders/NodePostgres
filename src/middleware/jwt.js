const jwt = require('jsonwebtoken');

const secret = process.env.JWT_KEY

class JWT {

    generateToken(payload) {
        return jwt.sign(payload, secret, { expiresIn: 60*60 });
    }

    verifyToken(token, callback) {
        return jwt.verify(token, secret, callback);
    }

}

module.exports = new JWT();