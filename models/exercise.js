// models/Exercise.js
module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Add more fields as needed
    });
  
    Exercise.associate = (models) => {
      // Define relationships here (if any)
    };
  
    return Exercise;
  };
  