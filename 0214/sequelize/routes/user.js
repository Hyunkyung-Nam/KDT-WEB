const express = require('express');
const controller = require('../controller/Cuser');

const router = express.Router();

//localhost:8000/api/user

//get /info 회원정보
router.get('/info/:id', controller.info);
//POST /signup 회원가입
router.post('/signup', controller.signup);
//POST /login 로그인
router.post('/login', controller.login);
//PATCH 혹은 PUT put은 전체수정, patch는 부분수정
//PATCH /update 회원수정
router.patch('/update', controller.update);
//DELETE /delete 회원삭제
router.delete('/delete', controller.delete);
//GET /all 회원전체정보
router.get('/all', controller.all);

module.exports = router;
