const express = require('express');
const db = require('./models');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(
    session({
        secret: 'my-board', //세션 암호화를 위한 비밀키,
        resave: false, // 항상 세션을 저장할지 여부,
        saveUninitialized: true, //초기화되지 않은 세션을 스토어에 저장
        cookie: {
            httpOnly: true, // 클라이언트에서 쿠키를 확인하지 못하도록 함
            secure: false, //나중에 true로 놓으면 https에서만 사용
        },
    })
);

//라우터
const indexRouter = require('./routes');
app.use('/', indexRouter);
const postRouter = require('./routes/post');
app.use('/api/post', postRouter);
const memberRouter = require('./routes/member');
app.use('/api/member', memberRouter);

//404
app.get('*', (req, res) => {
    res.status(404).render('404');
});

//테이블싱크
//force:true 항상 테이블을 삭제 후 재생성
//force:false(기본값) 테이블이 존재하면 패쓰, 없으면 생성
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});