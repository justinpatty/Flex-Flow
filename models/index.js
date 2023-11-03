const User = require('./user');
const Cardio = require('./Cardio');
const Log = require('./log');
const WeightTraining = require('./weightTraining');

User.hasMany(Log, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Cardio, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

User.hasMany(WeightTraining, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
Log.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  Log.hasMany(Cardio, {
    foreignKey: 'logId',
    onDelete: 'CASCADE'
  })
  Log.hasMany(WeightTraining, {
    foreignKey: 'logId',
    onDelete: 'CASCADE'
  })
  Cardio.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  Cardio.belongsTo(Log, {
    foreignKey: 'logId',
    onDelete: 'CASCADE'
  });
  WeightTraining.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  WeightTraining.belongsTo(Log, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

 

  

module.exports = { User, Log, Cardio, WeightTraining };

