const Router = require('express').Router;
const userController = require('../controller/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = new Router();

const { body } = require('express-validator');

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 32 }),
  userController.registration
);
router.post('/activation/:link', userController.activation);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getAllUsers);

module.exports = router;
