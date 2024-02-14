//const User00 = require('../model/Muser');
const { User } = require('../models/');
const { Op } = require('sequelize');

//회원가입
exports.signup = async (req, res) => {
    console.log(req.body);
    //const result = await User00.signup(req.body);
    const { userid, userpw, username } = req.body;
    User.create({
        //const Member = require('');
        //Memeber.User.create()을 객체 구조분해할당으로 간단하게 사용
        userid: userid,
        username: username,
        password: userpw,
    }).then(() => {
        res.json({ result: true });
    });
};

//로그인
exports.login = async (req, res) => {
    console.log(req.body);
    const { userid, userpw } = req.body;
    //const result = await User00.login(req.body);
    //console.log('login', result);
    User.findOne({ where: { userid: userid, password: userpw } }).then((result) => {
        console.log('login', result);
        result !== null
            ? res.json({ result: true, message: '로그인성공', id: result.id }) //dataValues안쓰고 바로 id에 접근가능
            : res.json({ result: false, message: '로그인실패', id: null });
    });
};

//회원정보 조회
exports.info = async (req, res) => {
    //console.log(req.params.id);
    const id = req.params.id;
    // const result = await User00.info(req.params.id);
    // console.log('info', result);
    User.findOne({ where: { id } }).then((result) => {
        console.log(result);
        result !== null
            ? res.json({ result: true, info: result, message: '회원 존재' })
            : res.json({ result: false, info: null, message: '존재하는 회원 없음' });
    });
};

//회원 전체 정보조회
exports.all = async (req, res) => {
    User.findAll({
        //where은 조건을 선택 (얘는 객체)
        //attributes는 원하는 컬럼 조회 (얘는 배열)
        attributes: ['userid', 'username'], //쓰는 순서대로 나온다
        //op(operator) 쓰기 위해서 const {Op} = require('sequelize'); 위에 한줄 추가
        //Op.gt :초과, Op.gte : 이상, Op.lt : 미만, Op.lte : 이하 Op.or : 또는 Op.ne : 같지 않음
        //Op.in : 배열 요소 중 하나, Op.notIn : 배열요소와 모두 다름
        where: { id: { [Op.gt]: 2 } },
        order: [['id', 'DESC']],
        limit: 1,
        offset: 2, //하나 건너뛰는거, 2하면 두개건너뛰는거
    }).then((result) => {
        console.log(result); //배열형태로 출력
        res.json({ result });
    });
};

//회원정보 수정
exports.update = async (req, res) => {
    console.log(req.body);
    const { id, username, userpw } = req.body;
    console.log(req.body);
    // const result = await User00.update(req.body);
    // console.log('update', result);
    User.update({ username: username, password: userpw }, { where: { id } }).then((result) => {
        res.json({ result: true });
    });
    // res.json({ result: true });
};

//회원정보 삭제
exports.delete = async (req, res) => {
    // console.log(req.body);
    // const result = await User00.delete(req.body);
    // console.log('delete', result);
    User.destroy({ where: { id: req.body.id } }).then((result) => {
        console.log('delete', result);
        res.json({ resut: true });
    });
    // res.json({ result: true });
};
