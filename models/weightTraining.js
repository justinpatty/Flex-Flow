// models/WeightTraining.js

module.exports = (sequelize, DataTypes) => {
  const WeightTraining = sequelize.define('WeightTraining', {
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
  });

};
