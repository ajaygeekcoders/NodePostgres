const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const UserModel = sequelize.define('user', {
    // Model attributes are defined here
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    isActive: { type: DataTypes.BOOLEAN },
    resetCode: { type: DataTypes.STRING },
    createdAt: { type:  DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  },{
    tableName: 'user'
  });

module.exports = UserModel;