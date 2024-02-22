const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('client');
});

io.on('connection', (socket) => {
    socket.on('create', (res, cb) => {
        console.log(res);
        socket.join(res.roomName);
        socket.roomName = res.roomName;
        socket.to(socket.roomName).emit('notice', { id: socket.id, user: res.userName });
        console.log(io.to(roomName));
        socket.emit('enter', { id: socket.id, user: res.userName, roomName: res.roomName });
        cb();
    });
    socket.on('sendMessage', (res) => {
        console.log(res);
        io.to(socket.roomName).emit('newMessage', res);
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
