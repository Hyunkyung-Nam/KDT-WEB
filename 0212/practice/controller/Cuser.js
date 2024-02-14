const user = require('../model/Muser');

exports.main = (req, res) => {
    res.render('main');
};
exports.signupPage = (req, res) => {
    res.render('signup');
};

exports.loginPage = (req, res) => {
    res.render('login');
};

exports.userInfoPage = (req, res) => {
    console.log('req.params', req.params);
    res.render('userinfo', { params: req.params });
};

exports.register = async (req, res) => {
    //회원가입
    console.log(req.body);
    let result = await user.register(req.body);
    res.send({ userid: req.body.userid });
    console.log(result);
};

exports.login = async (req, res) => {
    //로그인하기
    console.log(req.body);
    let result = await user.login(req.body);
    res.send({ status: result.status, userInfo: result.userInfo });
};

exports.getUserInfo = async (req, res) => {
    console.log('getUserInfo : ', req.body);
    let rows = await user.getUserInfo(req.body.id);
    console.log(rows);
    res.send({ userInfo: rows });
};

exports.updateInfo = async (req, res) => {
    console.log('userUpdate : ', req.body);
    let result = await user.updateInfo(req.body);
    res.send(result);
};

exports.deleteUser = async (req, res) => {
    let result = await user.deleteUser(req.body.id);
    console.log(result);
    res.send(result);
};
