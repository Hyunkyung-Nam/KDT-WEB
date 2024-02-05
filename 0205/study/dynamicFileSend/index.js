const express = require('express');
const multer = require('multer');
const path = require('path');
const { cpuUsage } = require('process');
const app = express();
const PORT = 8000;
let userId = '';

app.use(express.urlencoded({ extended: true })); //이거 안써주면 data전송안됨!
app.use(express.json()); //애도 안써주니까 req.body못읽음

app.use('/uploads', express.static(__dirname + '/uploads'));
app.set('view engine', 'ejs');

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, userId + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

app.get('/', (req, res) => {
    res.render('signUp');
});

app.post('/dyanmicDataUpload', (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    userId = id;
    console.log('userId', userId);
    res.send(req.body);
});

app.post('/dynamicFileUpload', upload.single('upload-file'), (req, res) => {
    console.log(req.file);
    res.send({ path: req.file.path });
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
