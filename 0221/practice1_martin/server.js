const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
//소켓서버
const io = socketIo(server);

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});
//소켓통신부분
io.on('connection', (socket) => {
    socket.on('hello', (arg) => {
        console.log('message', arg);
        socket.emit('RThello', { name: 'hello', message: arg });
    });
    socket.on('study', (arg) => {
        console.log('message', arg);
        socket.emit('RTstudy', { name: 'study', message: arg });
    });
    socket.on('bye', (arg) => {
        console.log('message', arg);
        socket.emit('RTbye', { name: 'bye', message: arg });
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost${PORT}`);
});
