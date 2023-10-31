// models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      // Add more fields as needed
    });
  
    User.associate = (models) => {
      User.hasMany(models.Workout, { foreignKey: 'userId' });
      // Define other relationships here (if any)
    };
  
    return User;
  };
  