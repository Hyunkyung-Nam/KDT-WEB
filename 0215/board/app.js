const express = require('express');
const db = require('./models'); //models/index.js
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

app.use('/public', express.static(__dirname + '/public'));

//라우터
const indexRouter = require('./routes');
app.use('/', indexRouter);

const postRouter = require('./routes/post');
app.use('/api/post', postRouter);

const memberRouter = require('./routes/member');
app.use('/api/member', memberRouter);

app.get('*', (req, res) => {
    res.status(404).render('404'); //console.log에 오류메세지까지 표시해줌
});

//테이블싱크(동기화)
//force:true 항상 테이블을 삭제 후 재 생성
//force:false 기본값 테이블이 존재하면 pass, 없으면 생성
//처음에는 force :true로 만들고 어느정도 데이터 넣고 개발이 된 이후에는 false로 바꾼다
//라이브서버에서 계속 true로 놓으면 난리남!! ㅋㅋㅋ
//라이브서버에서는 처음에 만들어 놓고 그냥 열게 만들면된다.. 선택사항이다
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
