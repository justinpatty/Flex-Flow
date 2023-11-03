// models/Log.js
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Log extends Model {
}

Log.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
},
{sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'log'
});


module.exports = Log;