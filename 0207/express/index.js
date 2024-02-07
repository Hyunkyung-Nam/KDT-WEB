//최상단에 환경변수 가져오기
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

//미들웨어 처리했다고 생각하면된다
// 해당폴더의 index.js는 생략가능
const router = require('./routes/index');
//const router = require('./routes');
const userRouter = require('./routes/user');

app.use('/', router); //앞의 주소는 routes/index.js의 주소설정
//app.use('/board', router); //board/comments이런식으로 될 거다
//router처리할게 여러개다하면 구분 짓는거!
//가져온 페이지의 기본주소지정이라고 생각하면됨
app.use('/user', userRouter);

app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
