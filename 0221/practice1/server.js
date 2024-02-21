const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

const server = http.createServer(app);
const io = socketIo(server);

app.get('/', (req, res) => {
    res.render('client');
});

io.on('connection', (socket) => {
    socket.on('message', (arg) => {
        console.log('message : ', arg);
        //cb(arg);
        socket.emit('backend_message', arg);
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
