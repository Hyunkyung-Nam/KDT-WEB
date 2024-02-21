const express = require('express');
const http = require('http');
const ws = require('ws');
const app = express();
const PORT = 8000;

//express로 미들웨어랑 라우터 여는 역할만 할거임

//http서버에 express연결
const server = http.createServer(app);
//http서버에 웬소켓 연결
const wss = new ws.Server({ server }); // 위에있는 http server와 연결, express와 ws연결
//wss -> web socket server

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});

//express는 http서버로 열게 만들거
//web소켓 서버 하나 또 있어야한다
//http가 express와 web소켓을 연결해주려고 사용
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//웹소켓
wss.on('connection', (socket) => {
    //매개변수 socket은 접속한 브러우저를 뜻함
    //console.log(wss.clients);
    console.log('클라이언트가 연결되었습니다.');

    //메세지 이벤트
    socket.on('message', (message) => {
        //웹소켓을 통해 클라이언트와 서버간의 데이터를 주고받을 때는 일반적으로 문자열 또는 버퍼 형태로 전달됨
        //버퍼를 쓰는 이유 : 서버가 모두 다른 환경이기 때문에 클라이언트에서 객체를 전달할 때는 객체를 일련의 바이트로 변환하는 직렬화 과정이 필요
        //버퍼 : 16진수값으로 되어있음
        //모든서버들은 버퍼값 받아서 처리한다. 클라이언트에서 버퍼형태로 전달
        //console.log('message', message);
        const msg = JSON.parse(message);
        // console.log(msg);
        // console.log(`클라이언트에서 받은 메세지는 ${msg.message}`);
        // socket.send(`서버메세지 : ${msg.message}`);
        wss.clients.forEach((value) => {
            value.send(`${msg.user} : ${msg.message}`);
        });
    });
    //오류이벤트
    socket.on('error', (err) => {
        console.log('error 발생', err);
    });
    //접속종료
    socket.on('close', () => {
        console.log('클라이언트와 연결이 종료되었습니다.');
    });
}); // 연결이벤트
