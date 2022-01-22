const Sequelize = require('sequelize');
const SequelizeTransforms= require('sequelize-transforms');
require('dotenv').config(); // Put the .env file variable to process.env object;

const sequelize = new Sequelize(process.env.DATABASE_URL);

const initDbConnection = async () => {
    try {
        await sequelize.authenticate();
        SequelizeTransforms(sequelize);
        console.log(`Database Connected`);
    } catch (err) {
        console.log(`Database Error - ${err}`);
        throw err;
    }
};

const rawQuery = (query, replacements) => {
    return sequelize.query(query, replacements);
};

module.exports = {
    sequelize,
    initDbConnection,
    rawQuery
};