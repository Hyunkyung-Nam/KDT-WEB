const express = require('express');
const router = express.Router();
const controller = require('../controller/comment'); //index.js파일 만들어놨으면 ../controller까지만 쓰면됨
//const { main, comment, comments } = require('../controller/comment');

//===router
router.get('/', controller.main);

router.get('/comments', controller.comments);

router.get('/comment/:page', controller.comment);

module.exports = router;
