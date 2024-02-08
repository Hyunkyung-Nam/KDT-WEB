const express = require('express');
const controller = require('../controller/Cvisitor');

const router = express.Router();

//방명록에 관한것만
//localhost:8000/visitor/
//app.js에 visitor하고 page에 visitor하면  root는 있을 수 없음 get('/')안됨
//lcoalhost:8000/api/visitor/

//방명록 전체보이기
router.get('/', controller.allVisitor);
//GET /:id 방명록 하나 보이기
router.get('/:id', controller.getVisitor);
//POST /write 방명록 하나작성
router.post('/write', controller.postVisitor);
//PATCH /update 방명록 하나 수정
router.patch('/update', controller.patchVisitor);
//Delte /delete 방명록 하나 삭제
router.delete('/delete', controller.deleteVisitor);

module.exports = router;
