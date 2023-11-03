const sequelize = require('../config/connection');
const { User, Cardio, Log, WeightTraining } = require('../models');

const userData = require('./userData.json');
const cardioData = require('./cardioData.json');
const logData = require('./logData.json');
const weightTrainingData = require('./weightTrainingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const Cardio of cardioData) {
    await Cardio.create({
      ...Cardio,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const Log of logData) {
    await Log.create({
      ...Log,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const WeightTraining of weightTrainingData) {
    await WeightTraining.create({
      ...WeightTraining,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
