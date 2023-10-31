// models/Workout.js
module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define('Workout', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Add more fields as needed
    });
  
    Workout.associate = (models) => {
      Workout.belongsTo(models.User, { foreignKey: 'userId' });
      Workout.belongsToMany(models.Exercise, {
        through: 'WorkoutExercises',
        foreignKey: 'workoutId',
      });
      // Define other relationships here (if any)
    };
  
    return Workout;
  };
  