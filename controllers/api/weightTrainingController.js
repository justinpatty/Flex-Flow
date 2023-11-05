const { WeightTraining } = require('../../models');
const getWeightTrainings = async (req, res) => {
  try {
    const weightTrainings = await WeightTraining.findAll();
    res.json(weightTrainings);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.post("/", async (req, res) => {
  const { title, description, reps, sets } = req.body;
  
  try {
    const newWeightTraining = await WeightTraining.create({ title, description, reps, sets });
    res.status(201).json(newWeightTraining);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

module.exports = router;
