const Router = require('express').Router;
const userController = require('../controller/user.controller');

const router = new Router();

const { body } = require('express-validator');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 32 }),
  userController.registration
);
router.post('/activation/:link', userController.activation);
router.get('/users', userController.getAllUsers);

module.exports = router;
