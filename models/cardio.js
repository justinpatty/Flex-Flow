// models/Cardio.js

module.exports = (sequelize, DataTypes) => {
  const Cardio = sequelize.define('Cardio', {
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
  });

  Cardio.associate = (models) => {
    Cardio.belongsTo(models.User, {
      foreignKey: 'userId', 
      onDelete: 'CASCADE', 
    });

    Cardio.belongsTo(models.Log, {
      foreignKey: 'logId', 
      onDelete: 'CASCADE', 
    });
  };

  return Cardio;
};
