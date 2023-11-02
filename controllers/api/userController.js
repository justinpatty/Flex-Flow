const bcrypt = require('bcrypt');
const db = require('../models');

const getUser = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createUser = async (req, res) => {
  const { username, password, age, weight, height, biography, profilePicture, bmi } = req.body;

  try {
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await db.User.create({
      username,
      password: hashedPassword, 
      age,
      weight,
      height,
      biography,
      profilePicture,
      bmi,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getUser,
  createUser,
};
