const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;
let userId = '';

app.set('view engine', 'ejs');
app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const newName = path.basename(file.originalname, ext) + ext;
            done(null, newName);
        },
    }),
});

app.get('/', (req, res) => {
    res.render('signUp');
});

app.post('/signUp', upload.single('uploadFile'), (req, res) => {
    const { id, pw, username, age } = req.body;
    console.log('req.file', req.file);
    console.log(req.body);

    res.render('result', { path: req.file.path, id, pw, username, age });

    // res.send({ id, pw, username, age, file: req.file });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
