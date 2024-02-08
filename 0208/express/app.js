const express = require('express');
const router = require('./routes/user');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//라우터
app.use('/', router);

//404 페이지
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});
