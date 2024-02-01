const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/getPage', (req, res) => {
    console.log(req.query);
    res.render('get'); //단순 페이지 열기
});
app.get('/resultGet', (req, res) => {
    console.log(req.query);
    //데이터 정보전달 받기
    const { username, gender, birthYear, birtMonth, birthDay, hobby } = req.query;
    res.render('result', {
        title: 'get방식 전송 결과',
        userInfo: {
            username,
            gender,
            birthYear,
            birtMonth,
            birthDay,
            hobby,
            color: { result: false, color: null },
            number: { reault: false, number: null },
        },
    });
});
//페이지를 열어줘야하기 때문에 get으로 연거다!
app.get('/postPage', (req, res) => {
    res.render('post'); //단순 페이지 열기
});

app.post('/resultPost', (req, res) => {
    console.log(req.query);
    //데이터 정보전달 받기
    const { username, gender, birthYear, birtMonth, birthDay, hobby, color, number } = req.body;
    res.render('result', {
        title: 'post방식 전송 결과',
        userInfo: {
            username,
            gender,
            birthYear,
            birtMonth,
            birthDay,
            hobby,
            color,
            number,
            color: { result: true, color },
            //color: { result: true, color:color },
            //key-value형태에서 key값과 value의 변수가 동일할 때는 하나로 합치기 가능
            number: { result: true, number },
        },
    });
});
//404페이지 만들어주기
//미들웨어
//app.use()면 타입에 상관없이 열린다.
//와일드카드라 *을 의미
//use는 http 전송방식을 이해하지 못함
//같은 router(url)로 get, post를 만들 수 있지만 use로는 접근이 불가
//방식만 다르면 router이름만 똑같게해서 여러개 만들수있다
//예를 들어 get방식의 '/login'과 post방식의 '/login'은 다른통신이지만
//use는 동일한 통신으로 인식한다.
//use는 404페이지일때 주로 사용
app.use('*', (req, res) => {
    res.render('404');
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
