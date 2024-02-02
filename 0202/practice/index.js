const express = require('express');
const app = express();
const PORT = 8000;
const ID = 'helloAxios';
const PW = '12345678';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/signUpPage', (req, res) => {
    res.render('signUpPage');
});

app.get('/loginPage', (req, res) => {
    res.render('loginPage');
});

app.get('/signUp', (req, res) => {
    console.log(req.query);
    const { name } = req.query;
    res.send({ name });
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const { id, pw } = req.body;
    let status = false;

    ID === id && PW === pw ? (status = true) : (status = false);

    res.send({ status });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
