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

};
