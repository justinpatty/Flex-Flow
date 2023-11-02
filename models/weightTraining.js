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

  WeightTraining.associate = (models) => {
    WeightTraining.belongsTo(models.User, {
      foreignKey: 'userId', 
      onDelete: 'CASCADE', 
    });

    WeightTraining.belongsTo(models.Log, {
      foreignKey: 'logId', 
      onDelete: 'CASCADE', 
    });
  };

  return WeightTraining;
};
