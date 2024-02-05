const express = require('express');
const app = express();
const PORT = 8000;
const id = 'kdt11';
const pw = '1111';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/login', (req, res) => {
    const { userid, userpw } = req.query;
    userid === id && userpw === pw
        ? res.send({ status: true, data: req.query })
        : res.send({ status: false, data: req.query });
});
app.post('/login', (req, res) => {
    console.log(req.body);
    const { userid, userpw } = req.body;
    userid === id && userpw === pw
        ? res.send({ status: true, data: req.body })
        : res.send({ status: false, data: req.body });
});
app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});
