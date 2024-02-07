const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
//정적파일 설정
app.use('/uploads', express.static(__dirname + '/uploads'));
//앞에는 도메인주소 뒤에는 경로

/*이렇게 설정하면 uploads라는 폴더가 자동생성되지만 이렇게 사용하지 않는다..!
const upload = multer{
    //dest: 업로드할 파일을 저장할 폴더를 지정
    dest : 'uploads/'
};*/
//경로 및 세부설정
//방법 1
const uploadDetail1 = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            //(요청객체, 업로드된 파일 객체, 콜백함수)
            done(null, 'uploads/'); //경로지정, 첫번째인자는 에러처리
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            //extname() : 확장자를 추출
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            //basename() : 파일이름을 추출(파일의 오리지널 명, 확장자를 제외해서 이름만 추출)
            //파일이름을 원래이름 + 타임스탬프 + 확장자로 구성
            // 타임스탬프를 넣는이유는 중복데이터 처리위해
            done(null, newName);
        },
    }),
    //limit: 파일저장 용량 제한(옵션)
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
});

const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, 'uploads/');
    },
    filename: (res, file, done) => {
        const ext = path.extname(file.originalname);
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;

        done(null, newName);
    },
});
const limits = {
    fileSize: 5 * 1024 * 1024,
};

const uploadDetail2 = multer({ storage, limits });

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/single', uploadDetail1.single('userfile'), (req, res) => {
    console.log(req.file);
    res.send(req.file);
});
app.post('/array', uploadDetail1.array('userfiles', 3), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});
app.post(
    '/fields',
    uploadDetail2.fields([{ name: 'user-files1' }, { name: 'user-files2' }, { name: 'user-files3' }]),
    (req, res) => {
        console.log(req.files);
        res.send(req.files);
    }
);

app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});
