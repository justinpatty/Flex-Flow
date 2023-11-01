// models/User.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      userId: {
        type: DataTypes.STRING, // You can use a string data type for a custom user ID
        allowNull: false, // Adjust this based on your requirements
        unique: true, // Ensure user IDs are unique
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      biography: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bmi: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    });
  
    User.associate = (models) => {
      // Define associations here (if any)
    };
  
    return User;
  };
  