const express = require('express');
const controller = require('../controller/post');

const router = express.Router();

//미들웨어
const isAuth = (req, res, next) => {
    //next() : express미들웨어서 다음 미들웨어로 제어를 전달하는 역할
    if (req.session && req.session.member) {
        next(); // 값이 있으면 다음 미들웨어로 넘어가라
    } else {
        res.status(401).json({ success: false, message: '인증되지 않은 사용자 입니다.' }); // 401은 인증되지 않았다 오류코드
    }
};

//GET /all 전체글 조회
router.get('/all', isAuth, controller.all); // isAuth가 맞으면 다음 controller.all이 실행되는거
//GET /post/:id 게시판글 하나 조회
router.get('/:id', isAuth, controller.post);
//POST /write 게시판 글 하나 생성
router.post('/write', isAuth, controller.write);
//PATCH /update 게시판 글 하나 수정
router.patch('/update', isAuth, controller.update);
//DELETE /delete 게시판 글 하나 삭제
router.delete('/delete', controller.delete);
//POST /comment 댓글 생성
router.post('/comment', isAuth, controller.comment);

module.exports = router;
