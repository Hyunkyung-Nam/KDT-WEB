const express = require('express');
const multer = require('multer');
const path = require('path'); //내장모듈, 폴더와 파일의 경로를 쉽게 조적하도록 제공
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
//정적파일 설정
//앞에는 도메인주소 뒤에는 경로
//http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer설정
//실제로 사용되지 않는 방법
const upload = multer({
    //dest: 업로드할 파일을 저장할 폴더를 지정
    dest: 'uploads/',
});

//multer 세부설정 2가지 방법
//===방법 1
const uploadDetail = multer({
    //storage : 저장할 공간에 대한 정보(필수!)
    //diskStorage : 파일을 저장하기 위한 모든 제어기능 제공(파일 저장관련 설정)
    storage: multer.diskStorage({
        //destination : 업로드할 파일을 저장할 폴더를 지정
        destination(req, file, done) {
            //(요청객체, 업로드된 파일 객체, 콜백함수)
            done(null, 'uploads/'); // 첫번째인자는 에러처리임, 공식페이지에도 대부분 null써있움..ㅋㅋ 다른데서 에러처리함
        },
        //filename : 파일 이름을 결정(요청객체, 업로드된 파일 객체, 콜백함수)
        filename(req, file, done) {
            //extname() : 확장자를 추출
            const ext = path.extname(file.originalname);
            //basename() : 파일이름을 추출(파일의 오리지널 명, 확장자를 제외해서 이름만 추출)
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;

            done(null, newName);
        },
    }),
    //limit: 파일저장 용량 제한(옵션)
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB 제한
});
//===
//===방법2
const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, 'uploads/');
    },
    filename: (res, file, done) => {
        //extname() : 확장자를 추출
        const ext = path.extname(file.originalname);
        //basename() : 파일이름을 추출(파일의 오리지널 명, 확장자를 제외해서 이름만 추출)
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;

        done(null, newName);
    },
});
const limits = {
    fileSize: 5 * 1024 * 1024,
};
//====
const uploadDetailPart2 = multer({ storage, limits }); //storage: storage, limits: limits
//router
//===페이지

app.get('/', (req, res) => {
    res.render('index');
});

//===요청, 응답 데이터
//싱글 : single()
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    //single(프론트에서 보낼 name값)
    console.log('req.file', req.file);
    console.log('title', req.body);
});
//멀티(ver1) : array(name, 파일업로드개수제한)
app.post('/upload/array', uploadDetail.array('userfiles', 3), (req, res) => {
    console.log('req.files', req.files);
    console.log('title', req.body);
});
//멀티(ver2) : fields 객체 배열형태로 넣는다
app.post('/upload/fields', uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]), (req, res) => {
    console.log('req.files', req.files);
    console.log('title', req.body);
});
app.post('/upload/dynamic', uploadDetail.single('file'), (req, res) => {
    console.log(req.file);
    //경로만 보내주려면 .path추가
    res.send({ file: req.file, title: req.body });
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
