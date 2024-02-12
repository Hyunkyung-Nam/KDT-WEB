const express = require('express');
const app = express();
const PORT = 8000;

require('dotenv').config(); // .env 파일의 환경변수를 읽어옴
console.log('process.env.KEY : ', process.env.KEY);
