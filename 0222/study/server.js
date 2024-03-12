const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

//http서버에 express연결
const server = http.createServer(app);
//http서버에 socket 연결
const io = socketIo(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('chat');
});

io.on('connection', (socket) => {
    //io : 접속해있는 모든 웹 브라우저
    //socket : 접속한 웹 브라우저
    //웹 브라우저가 접속하면 고유한 id값이 생성되고 socket.id로 확인 가능
    socket.on('create', (res, cb) => {
        //join : 해당 방이름이 없으면 생성, 있으면 입장
        socket.join(res.roomName);
        //소켓안에 객체 형태로 저장가능
        socket.roomName = res.roomName;

        //송신자를제외한 해당방의 사람들에게 입장알림
        socket.to(res.roomName).emit('notice', { user: res.userName });
        //자기자신에게 입장알림
        socket.emit('enter', { roomName: res.roomName });
        cb();
    });
});
io.on('disconnet', (socket) => {});
io.on('disconnection', (socket) => {});
io.on('error', (socket) => []);

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
