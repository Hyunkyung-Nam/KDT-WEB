const express = require('express');
const app = express();
const PORT = 8000;

//미들웨어
app.set('view engine', 'ejs');
app.use(express.json());

//라우터
const pageRouter = require('./routes/page');
const visitorRouter = require('./routes/visitor');
app.use('/api/visitor', visitorRouter);
app.use('/', pageRouter);

//404
app.use('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});
