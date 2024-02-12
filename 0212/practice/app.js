const express = require('express');
const userRouter = require('./routes/Ruser');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json()); // 얘보다 signupRouter가 위에있으면 req.body에 undefined옴

app.use('/user', userRouter);

app.get('*', (req, res) => {
    res.status(404).render('404');
});
app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});
