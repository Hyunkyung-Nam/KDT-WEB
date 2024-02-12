const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);
router.get('/signup', controller.signupPage);
router.get('/login', controller.loginPage);
router.get('/userinfo/:id', controller.userInfoPage);

router.post('/signup', controller.register);
router.post('/login', controller.login);
router.post('/getUserInfo', controller.getUserInfo);
router.patch('/updateInfo', controller.updateInfo);
router.delete('/deleteUser', controller.deleteUser);

module.exports = router;
