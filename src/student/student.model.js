
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const StudentModel = sequelize.define('user', {
    name: { type: DataTypes.STRING },
    schoolId: { type: DataTypes.STRING },
    class: { type: DataTypes.NUMBER },
    rollNo: { type: DataTypes.NUMBER },
    address: { type: DataTypes.STRING },
    isActive: { type: DataTypes.BOOLEAN },
    createdAt: { type: DataTypes.DATE },
    createdBy: { type: DataTypes.STRING },
    updatedAt: { type: DataTypes.DATE },
    updatedBy: { type: DataTypes.STRING },
}, {
    tableName: 'student'
});

module.exports = StudentModel;