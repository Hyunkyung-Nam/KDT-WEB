const express = require('express');
const app = express();
const PORT = 8000; // 상수라 대문자로 씀

app.set('view engine', 'ejs');
app.set('views', './views');

//정적파일 불러오기
app.use('/public', express.static(__dirname + '/public'));

//순서가 매우 중요함!
app.get('/', function (req, res) {
    //send() 클라이언튼에 응답데이터를 보낼 대
    res.send('hello express');
});

app.get('/kdt', (req, res) => {
    //render() 뷰 엔진 렌더링
    res.render('test', { name: '홍길동' }); //알아서 test.egj 찾아갈거다
    //렌더링할 때 파일에 데이터를 전달할 수도 있음
});

app.get('/gugu', (req, res) => {
    res.render('gugudan', { data: 2, dan: 2, length: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});

app.get('/fruits', (req, res) => {
    res.render('fruits', {
        fruits: [
            { name: 'apple', kor: '사과' },
            { name: 'bananas', kor: '바나나' },
            { name: 'grapes', kor: '포도' },
            { name: 'peaches', kor: '복숭아' },
        ],
    });
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
