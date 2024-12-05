const Router = require('express').Router;
const userController = require('../controller/user.controller');

const router = new Router();

router.post('/registration', userController.registration);
router.get('/users', userController.getAllUsers);

module.exports = router;
