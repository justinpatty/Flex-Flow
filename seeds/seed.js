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

  for (const cardio of cardioData) {
    await Cardio.create({
      ...cardio,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const log of logData) {
    await Log.create({
      ...log,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const weightTraining of weightTrainingData) {
    await WeightTraining.create({
      ...weightTraining,
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
