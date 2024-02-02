import express from 'express';
const app = express();
const PORT = 8000;

//미들웨어 설정
//1. body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//2. ejs
app.set('view engine', 'ejs');
app.set('views', './views'); //기본값이라 생략 가능

//rootPage설정
app.get('/', (req, res) => {
    //index.ejs페이지 띄워줌
    res.render('index');
});
app.get('/getPageMove', (req, res) => {
    // get요청으로 이동링크 눌렀을 때 index.ejs페이지에서 getPage.ejs페이지로 이동
    res.render('getPage');
});

app.get('/postPageMove', (req, res) => {
    // get요청으로 이동링크 눌렀을 때 index.ejs페이지에서 getPage.ejs페이지로 이동
    res.render('postPage');
});

app.get('/result', (req, res) => {
    //get방식은 res.query로 받아온다
    // 구조분해할당으로 값을 가져오면 편하게 사용가능
    const { id: userId, pw: userPw } = req.query;
    res.render('result', {
        title: 'get요청결과',
        id: userId,
        pw: userPw,
    });
});

app.post('/result', (req, res) => {
    //get방식은 res.query로 받아온다
    // 구조분해할당으로 값을 가져오면 편하게 사용가능
    const { id: userId, pw: userPw } = req.body;
    res.render('result', {
        title: 'post요청결과',
        id: userId,
        pw: userPw,
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
