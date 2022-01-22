
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const SchoolModel = sequelize.define('user', {
    name: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    isActive: { type: DataTypes.BOOLEAN },
    createdAt: { type: DataTypes.DATE },
    createdBy: { type: DataTypes.STRING },
    updatedAt: { type: DataTypes.DATE },
    updatedBy: { type: DataTypes.STRING },
}, {
    tableName: 'school'
});

module.exports = SchoolModel;