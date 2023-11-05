const { Cardio } = require('../../models');

const getCardios = async (req, res) => {
  try {
    const cardios = await Cardio.findAll();
    res.json(cardios);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createCardio = async (req, res) => {
  const { title, description, duration, distance } = req.body;
  
  try {
    const newCardio = await Cardio.create({ title, description, duration, distance });
    res.status(201).json(newCardio);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getCardios,
  createCardio,
};
