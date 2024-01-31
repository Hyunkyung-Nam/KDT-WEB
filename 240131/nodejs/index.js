import { a, b, c, print } from './module.js';
print();

/* const connect = require('./module.js');
const { a, b, c, print } = connect;

console.log(connect);
console.log(connect.a);
console.log(connect.b);

console.log(a);
console.log(b);
print(); */

//http서버를 사용하기 위해 http모듈을 가져옴
/*
const http = require('http');

//req -> 클라이언트가 서버한테 해달라고하는거
//res -> 서버가 클라이언트에 응답
const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.write('<h1>Hello NodeJs!</h1>');
    res.end('<p>End</p>');
});

//listen : 서버를 실행 8000번대 많이함
server.listen(8000, function () {
    console.log('8000번 포트 실행');
});

server.on('request', function () {
    console.log('요청이벤트');
});

server.on('connection', function () {
    console.log('접속이벤트');
});*/

/*const http = require('http');
const fs = require('fs'); // file system, 파일을 내보내거나 받을 때 필요함

const server = http.createServer(function (req, res) {
    //파일전송
    //싱글스레드라 오류가 나면 멈춰버림
    //이를 해결하기 위해 try catch로 예외처리를 해줌
    try {
        //서버가 정상작동 할 때 나오는 코드
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.write(data);
        res.end();
    } catch (error) {
        // 오류가 날 때 나오는 코드
        console.log(error);
        res.writeHead(404);
        res.write(error.message);
        res.end();
    }
});

server.listen(8000, function () {
    console.log('http://localhost:8000');
});*/
