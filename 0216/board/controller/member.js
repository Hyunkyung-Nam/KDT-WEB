const { Member, Profile } = require('../models');
const SAVEDID = 'savedID'; //상수형태로 넣는게 일반적인 형태, 상수파일 만들어서 모듈화 하기도함

//회원가입
exports.signup = async (req, res) => {
    const { userId, pw, username, age, email } = req.body;
    //존재여부확인
    const find = await Member.findOne({ where: { userId } });
    console.log('find', find);

    if (find) {
        res.json({ success: false, message: '이미존재하는 회원' });
    } else {
        //생성 create
        const result = await Member.create({ userId, password: pw });
        console.log('signup', result);
        const result2 = await Profile.create({ username, age, email, memberId: result.id });
        console.log('profile', result2);
        res.json({ success: true });
    }
};
//로그인
exports.login = async (req, res) => {
    const { userId, pw, save } = req.body;
    //검색 findOne
    const result = await Member.findOne({ where: { userId, password: pw } });
    console.log('login', result);
    if (result) {
        req.session.member = result; // 세션에 있는 멤버에 로그인 정보 저장
        if (save === 'save') {
            res.cookie(SAVEDID, result.id, { maxAge: 60 * 1000 * 10, httpOnly: true });
        } else {
            res.clearCookie(SAVEDID);
        }
        res.json({ success: true, result });
    } else {
        res.json({ success: false });
    }
};
//회원조회
exports.find = async (req, res) => {
    const { id } = req.session.member;
    console.log(id);
    //findByPk
    //const find = await Member.findOne({ where: { id } });
    const result = await Member.findByPk(id, {
        attributes: ['userId', 'password'],
        include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
    });
    console.log('result', result);
    res.json({ success: true, result });
};
//정보수정
exports.update = async (req, res) => {
    const { pw, username, age, email } = req.body;
    const { id } = req.session.member;
    const result = await Member.update({ password: pw }, { where: { id } });
    const result2 = await Profile.update({ username, age, email }, { where: { memberId: id } });
    console.log('update', result);
    res.json({ success: true });
};
//회원탈퇴
exports.delete = async (req, res) => {
    const { id } = req.body;
    const result = await Member.destroy({ where: { id } });
    console.log('delete', result);
    res.json({ success: true });
};

exports.logout = async (req, res) => {
    if (req.session.member) {
        //세션제거
        req.session.destroy(() => {
            res.json({ success: true });
        });
    } else {
        res.json({ success: false, message: '로그인상태가 아닙니다.' });
    }
};

//쿠키 보내가
exports.getCookie = async (req, res) => {
    if (req.cookies[SAVEDID]) {
        res.json({ isLoggedIn: true });
    } else {
        res.json({ isLoggedIn: false });
    }
};
