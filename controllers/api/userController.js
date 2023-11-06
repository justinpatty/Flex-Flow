const router = require('express').Router();
// const passport = require('passport');
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const { username, password } = req.body;

    // const hashedPassword = await bcrypt.hash(password, 10);

    const userData = await User.create({
      username,
      password
    });

      console.log(userData)
     req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
 
  try {
    console.log(req.body)
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log(userData)
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
console.log("trest")
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy(() => {
    res.status(204).end();
  });
});

module.exports = router;

