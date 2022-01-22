const logger = require('./logger')

async function customLogger(level, message, label, data) {
    logger.log(level, message, { "label": label, "data": data });
}

module.exports = { customLogger };