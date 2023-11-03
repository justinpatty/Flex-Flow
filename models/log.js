// models/Log.js

module.exports = (sequelize, DataTypes) => {
  const Log = sequelize.define('Log', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  Log.associate = (models) => {
    Log.belongsTo(models.User, {
      foreignKey: 'userId', 
      onDelete: 'CASCADE', 
    });

    Log.hasMany(models.Cardio, {
      foreignKey: 'logId', 
      onDelete: 'CASCADE', 
    });

    Log.hasMany(models.WeightTraining, {
      foreignKey: 'logId', 
      onDelete: 'CASCADE', 
    });
  };

  return Log;
};
