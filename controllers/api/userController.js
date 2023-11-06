const router = require('express').Router();
const passport = require('passport');
const { User } = require('../../models');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await User.create({
      username,
      password: hashedPassword,
    });

    req.login(userData, (err) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(userData);
      }
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
 
  res.json({ user: req.user, message: 'You are now logged in!' });
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;

