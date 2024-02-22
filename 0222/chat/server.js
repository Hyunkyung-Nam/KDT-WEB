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

//사용자 정보 갱신 함수
function getUserList(room) {
    //room에 접속한 모든사용자
    const users = [];
    //room : 접속한 room id
    //채팅룸에 접속한 socket.id값을 찾기
    const clients = io.sockets.adapter.rooms.get(room);
    console.log('clients', clients);
    if (clients) {
        clients.forEach((client) => {
            //io.sockets.sockets : socket.id가 할당한 변수들의 객체값
            console.log('client', client);
            const userSocket = io.sockets.sockets.get(client);
            console.log('userSocket', userSocket.userName);
            const info = { username: userSocket.userName, key: client };
            users.push(info);
        });
    }
    return users;
}
const roomList = [];
//소켓서버
io.on('connection', (socket) => {
    //socket : 접속한 웹브라우저
    //io : 접속해있는 모든 웹 브라우저
    //웹브라우저가 접속이되면 고유한 id값이 생성됨. soket.id로 확인가능
    console.log(socket.id);
    // console.log(io.sockets);
    //채팅방 만들기
    socket.on('create', (res, cb) => {
        //join(방이름) : 해당 방이름이 없으면 생성, 존재하면 입장
        console.log(res);
        socket.join(res.roomName);
        console.log('방생성 후 ', socket.rooms);
        //socket객체안에 원하는 값을 할당
        socket.roomName = res.roomName;
        socket.userName = res.userName;
        //io.to(res.roomName).emit('notice', `${socket.id}님이 입장하셨습니다.`);
        //나를 제외한 모든 방 사람에게 전달 broadcast넣는거랑 안넣는거랑 같은거..?
        //socket.broadcast.to(res).emit('create', '새로운 브라우저가 입장하였습니다.');
        socket.emit('enter', `${socket.roomName}에 입장하였습니다.`);
        socket.to(res.roomName).emit('notice', `${socket.id}님이 입장하셨습니다.`);
        cb();

        //채팅방 목록 갱신
        // 새로고침을 해도 기존에 방 만들어뒀으면 값이 오지 않는다.
        // 서버 껐다가 다시켜서 확인하기!!ㄴ
        if (!roomList.includes(res.roomName)) {
            roomList.push(res.roomName);
            //갱신된 목록은 전체가 봐야함
            io.emit('roomList', roomList);
        }

        //사용자 정보 갱신
        const userList = getUserList(res.roomName);
        io.to(res.roomName).emit('userList', userList);
    });
    //메세지
    socket.on('sendMessage', (res) => {
        console.log(res);
        const { userName, message, select } = res;
        if (select === 'all') {
            //특정방에 전체사용자에게 메세지 보내기
            io.to(socket.roomName).emit('newMessage', { userName, message, dm: false });
        } else {
            io.to(select).emit('newMessage', { userName, message, dm: true });
            //자기 자신에게 메세지 보내기
            socket.emit('newMessage', { userName, message, dm: true });
        }
    });
});
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
