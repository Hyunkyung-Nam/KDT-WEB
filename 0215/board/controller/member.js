const { Member, Profile } = require('../models');

exports.signup = async (req, res) => {
    //생성 create
    const { userid, userpw, username, age, email } = req.body;
    // 존재 여부 확인
    const find = await Member.findOne({ where: { userId: userid } });
    if (find) {
        res.json({ result: false, message: '이미 존재하는 회원' });
    } else {
        const result = await Member.create({ userId: userid, password: userpw });
        console.log('signup', result);
        const result2 = await Profile.create({ username, age, email, memberId: result.id });
        console.log('profile', result2);
        res.json({ result: true });
    }
};
//로그인
exports.login = async (req, res) => {
    // 검색 findOne
    const { userid, userpw } = req.body;
    const result = await Member.findOne({ where: { userId: userid, password: userpw } });
    console.log('login', result);
    if (result) {
        res.json({ result: true, data: result });
    } else {
        res.json({ result: false, message: '아이디 또는 비밀번호를 확인하세요' });
    }
};

//회원조회
exports.findMember = async (req, res) => {
    const { id } = req.params;
    //const result = await Member.findOne({ where: { id } });
    //findOne은 검색에서 사용하는거
    //findByPk primary key로 접근하고 싶을 때 사용
    const result = await Member.findByPk(id, {
        attributes: ['userid'],
        include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
    });
    // 외래키로 연결해 놓은 profile의 데이터도 같이 찾아온다
    console.log('findMember', result);
    if (result) {
        res.json({ result: true, data: result });
    } else {
        res.json({ result: false, message: '존재하는 회원이 없습니다' });
    }
};

exports.update = async (req, res) => {
    const { id, userpw, username, age, email } = req.body;
    const result = await Member.update({ password: userpw }, { where: { id } });
    const result2 = await Profile.update({ username, age, email }, { where: { memberId: id } });
    console.log('update', result);
    res.json({ result: true });
};

exports.delete = async (req, res) => {
    const { id } = req.body;
    //나중에는 탈퇴를 destroy로 하지 않고 update에서 정보변경으로 함
    const result = await Member.destroy({ where: { id } });
    //cascade해서 member 삭제하면 profile도 삭제된다
    console.log('delete', result);
    res.json({ result: true });
};
