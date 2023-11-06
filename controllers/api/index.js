const router = require('express').Router();
// const cardioController = require('./cardioController');
// const logController = require('./logController');
const userController = require('./userController');
// const weightTrainingController = require('./weightTrainingController');

router.use('/user', userController);
// router.use('/cardio', cardioController);
// router.use('/log', logController);
// router.use('/weightTraining', weightTrainingController);

module.exports = router;
