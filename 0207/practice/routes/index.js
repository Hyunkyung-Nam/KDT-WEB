const express = require('express');
const controller = require('../controller');

const router = express.Router();

//router
//=== 페이지
router.get('/', controller.main);

router.get('/axiosPost', controller.axiosPost);
//=== 데이터 요청 응답

router.post('/resultPost', controller.result);

module.exports = router;
