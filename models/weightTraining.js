// models/WeightTraining.js
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class WeightTraining extends Model {
}

WeightTraining.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'weighttraining'
  });


  module.exports = WeightTraining;