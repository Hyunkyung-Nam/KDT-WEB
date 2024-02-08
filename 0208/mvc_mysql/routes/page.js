const express = require('express');
const controller = require('../controller/Cpage');
const router = express.Router();

//localhost:8000/
router.get('/', controller.main);
//localhost:8000/visitor
router.get('/visitor', controller.pageVisitor);
//얘는 단순히 페이지만 여는 역할, 데이터 보내는건 다른데에서 할거임
module.exports = router;
