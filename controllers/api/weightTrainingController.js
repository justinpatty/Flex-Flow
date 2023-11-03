const WeightTraining = require('../../models/WeightTraining');

const getWeightTrainings = async (req, res) => {
  try {
    const weightTrainings = await WeightTraining.findAll();
    res.json(weightTrainings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createWeightTraining = async (req, res) => {
  const { title, description, reps, sets } = req.body;
  
  try {
    const newWeightTraining = await WeightTraining.create({ title, description, reps, sets });
    res.status(201).json(newWeightTraining);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getWeightTrainings,
  createWeightTraining,
};
