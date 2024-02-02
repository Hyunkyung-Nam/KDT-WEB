const express = require('express');
const app = express();
const PORT = 8000;

//미들웨어가져오기
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
//app.set('views', '/views');

//root 페이지 꼭 맨위에 만들기
//router//=========페이지
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/submit', (req, res) => {
    res.render('submit');
});

app.get('/func', (req, res) => {
    res.render('func');
});
//==============페이지끝
/**
 * render() : 뷰페이지 렌더링, render(뷰페이지 이름, 데이터(선택))
 * send() : 모든타입 데이터 전송(문자열, 배열, 객체, 숫자 등)
 * json() : 객체타입 데이터 전송
 * redirect : 페이지 강제이동
 * render가 아니라 send임(비동기 데이터 보내는거)
 * 페이지 열어주는거만 render
 */
//==============요청과 응답
//ajax get
app.get('/ajax', (req, res) => {
    console.log('요청값', req.query);
    const { name, email } = req.query;
    //프론트로 보내는 데이터
    res.send({ result: true, name: `${name}님`, email: `주소 : ${email}` }); //미리 true인지 false인지 알려줌
    //객체로 보내주면됨
});

app.post('/ajax', (req, res) => {
    console.log('요청값', req.body);
    const { name, email } = req.body;
    //프론트로 보내는 데이터
    res.send({ username: name, email });
});

app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});
app.post('/axios', (req, res) => {
    console.log('요청값', req.body);
    const { username, email } = req.body;
    const data = {
        name: `안녕하세요 ${username}님`,
        address: `주소는 ${email}입니다`,
    };
    res.send(data);
});
app.get('/fetch', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.post('/fetch', (req, res) => {
    console.log('요청값', req.body);
    res.send(req.body);
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
