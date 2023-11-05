const { Log } = require('../../models');

router.get("/", async (req, res) => {
  try {
    const logs = await Log.findAll(); 
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  
  try {
    const newLog = await Log.create({ title, description });
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
})

module.exports = router;
