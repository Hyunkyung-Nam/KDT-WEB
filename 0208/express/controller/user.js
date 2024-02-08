//파일명 Cuser.js / Muser.js / Ruser.js 이런식으로 구분하는 경우 있음

const Users = require('../model/user'); // 데이터라는걸 알려주려고 대문자로 시작하기도함

const main = (req, res) => {
    res.render('index', { users: Users });
};

const register = (req, res) => {
    const { name, gender, major } = req.body;
    Users.push({ id: Users.length + 1, name, gender, major });
    res.send({ result: true });
};

module.exports = { main, register };
