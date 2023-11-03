// models/Cardio.js
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Cardio extends Model {
}

Cardio.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    distance: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cardio'
  });

  module.exports = Cardio;
