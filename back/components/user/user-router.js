const Router = require('express').Router;
const authMiddleware = require('../../authMiddleware');
const userController = require('./user-controller');
const router = new Router();


router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/refresh', userController.refresh);
router.post('/logout', userController.logout);


module.exports = router;