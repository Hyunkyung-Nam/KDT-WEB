const express = require('express');
const app = express();
const PORT = 8000;
const ID = 'kdt11';
const PW = '1234';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

//router
//=== 페이지
app.get('/', (req, res) => {
    //res.render('');
});

app.get('/axiosGet', (req, res) => {
    res.render('get');
});

app.get('/axiosPost', (req, res) => {
    res.render('post');
});
//=== 데이터 요청 응답
app.get('/resultGet', (req, res) => {
    console.log('요청값 : ', req.query);
    res.send({ response: req.query });
});
app.post('/resultPost', (req, res) => {
    console.log('요청값 : ', req.body);
    const { id: userId, pw: userPw } = req.body;
    if (ID === userId && PW === userPw) {
        res.send({ result: true, userInfo: { userId } });
    } else {
        res.send({ result: false, userInfo: null });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
