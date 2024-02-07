const userInfo = require('../model/userInfo');

exports.main = (req, res) => {
    res.render('login');
};

exports.axiosPost = (req, res) => {
    res.render('post');
};

exports.result = (req, res) => {
    console.log('요청값 : ', req.body);
    const { id: userId, pw: userPw } = req.body;
    console.log(userInfo);
    console.log(userInfo.id === userId);
    console.log(userInfo.pw === userPw);
    if (userInfo.id === userId && userInfo.pw === userPw) {
        console.log('성공');
        res.send({ result: true, userInfo: { userId } });
    } else {
        console.log('실패');
        res.send({ result: false, userInfo: null });
    }
};
