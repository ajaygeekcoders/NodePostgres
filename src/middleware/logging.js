const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, '../../logs/access.log');

const loggerFun = (tokens, req, res) => {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
    ].join(' ')
}

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' })

module.exports = (app) => {
    app.use(morgan(loggerFun, { stream: accessLogStream }))
    app.use(morgan(loggerFun));
}