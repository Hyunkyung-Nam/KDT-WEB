const express = require('express');
const aws = require('aws-sdk'); //aws 설정을 위한 모듈
const multerS3 = require('multer-s3'); //aws s3에 파일 업로드 하기 위한 multer설정
const multer = require('multer');
require('dotenv').config();
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');

//aws 설정
aws.config.update({
    accessKeyId: process.env.accessKeyId, //엑세스키,
    secretAccessKey: process.env.secretAccessKey,
    region: 'ap-northeast-2',
});

//aws s3 인스턴스 생성
const s3 = new aws.S3();

//multer 설정
const upload = multer({
    storage: multerS3({
        s3,
        bucket: 'kdt11-hk-test', //bucket 이름
        acl: 'public-read', // 파일 접근 권한(public-read로 해야 업로드 된 파일이 공개)
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

//라우터
//페이지
app.get('/', (req, res) => {
    res.render('index');
});
//api
app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
