const express = require('express');
const controller = require('../controller/post');
const router = express.Router();

//GET post/all 전체 글 조회
router.get('/all', controller.all);
//GET /post/:id 게시판 글 하나 조회
router.get('/:id', controller.post); //애를 위에 쓰면안된다 id라는 변수로 모든값을 받아서 all도 받을수도 있다
//POST /write 게시판 글 하나 생성
router.post('/write', controller.write);
//PATCH /update 게시판 글 하나 수정
router.patch('/update', controller.update);
//DELTET /delete 게시판 글 하나 삭제
router.delete('/delete', controller.delete);

module.exports = router;
