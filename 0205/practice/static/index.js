const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//정적파일 설정
app.use('/uploads', express.static(__dirname + '/uploads'));

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, 'uploads/'); //파일저장경로설정
    },
    filename: (req, file, done) => {
        const ext = path.extname(file.originalname);
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        done(null, newName);
    },
});
const limits = {
    fileSize: 5 * 1024 * 1024, //5MB제한
};

const upload = multer({ storage, limits });

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload', upload.single('userfile'), (req, res) => {
    console.log('file', req.file);
    console.log('data', req.body);
    const { id, pw, username, age } = req.body;
    console.log(req.file.path);
    res.render('result', { path: req.file.path, id, pw, username, age });
});

app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});
