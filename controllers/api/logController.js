const db = require('../models'); 

const getLogs = async (req, res) => {
  try {
    const logs = await db.Log.findAll(); 
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createLog = async (req, res) => {
  const { title, description } = req.body;
  
  try {
    const newLog = await db.Log.create({ title, description });
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getLogs,
  createLog,
};
