const commentsModel = require('../model/comment');
//모듈이 1개만써있어서 이렇게해서 된거다
// 여러개쓴건 객체구조분해로 보내주고 .으로 받는거 근데 이렇게 사용하지는 않음/model에는 하나의파일에 하나의 데이터 넣는다

//방법1
// exports.main = (req, res) => {
//     res.render('index');
// };

// exports.comments = (req, res) => {
//     res.render('comments', { list: comments });
// };

// exports.comment = (req, res) => {
//     console.log(req.params);
//     console.log(typeof req.params.page);
//     const page = Number(req.params.page);
//     res.render('comment', { data: comments[page - 1] });
// };

//방법2
const main = (req, res) => {
    res.render('index');
};

const comments = (req, res) => {
    res.render('comments', { list: commentsModel });
};

const comment = (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    res.render('comment', { data: commentsModel[page - 1] });
};

module.exports = { main, comments, comment };
