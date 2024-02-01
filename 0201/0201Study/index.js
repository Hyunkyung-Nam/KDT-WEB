const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

//정적파일 불러오기
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.get('/index', (req, res) => {
    res.render('index', { title: 'EJS TEST', count: 5 });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
