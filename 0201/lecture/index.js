const express = require('express');
const app = express();
const PORT = 8000; // 서버쪽은 8000번대
// 리액트하면 프론트 자동으로 3000 잡는다

//body-parser사용
//미들웨어는 npm 저장소 가져오는 파트 아래에 쓰기
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded방식
app.use(express.json()); //json방식에서 사용

// view engine
app.set('view engine', 'ejs');
app.set('views', './views'); //얘는 폴더안바꿀거라 안써도되지만 일단 쓰겠음!

//서버주소(url) 만드는 행동 router(라우터)라고함
app.get('/', (req, res) => {
    res.render('index'); //index페이지로 렌더링 시킬거임
    //root로 들어왔을 때 index페이지가 열리는 역할
});

app.get('/getForm', (req, res) => {
    console.log(req.query); // 받는거만 해보기!
    res.render('result', { title: 'GET요청 결과', userInfo: req.query });
});
//url이 아니라 router임 약간 개념이 다르기때문에 라우터로 기억하기!!!!
//다이렉트 접근이 불가능. url이 아니라서. get 방식으로 해야 들어가짐..
//호스트 전송방식일때만 접근가능!!
app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result', { title: 'POST요청 결과', userInfo: req.body });
});

//서버실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
