const USER = require('../model/user'); //db인거 알려주려고 대문자 쓰는 경우 있음

exports.axiosPost = (req, res) => {
    res.render('post');
};

exports.resultPost = (req, res) => {
    console.log('요청값 : ', req.body);
    const { id: userId, pw: userPw } = req.body;
    if (USER[0].userid === userId && USER[0].userpw === userPw) {
        res.send({ result: true, userInfo: { userId } });
    } else {
        res.send({ result: false, userInfo: null });
    }
};
