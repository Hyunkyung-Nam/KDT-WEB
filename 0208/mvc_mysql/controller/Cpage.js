exports.main = (req, res) => {
    res.render('index');
};

exports.pageVisitor = (req, res) => {
    //render는 ejs페이지 열어주려고 사용하는거라 리액트에서 사용안함
    res.render('visitor');
};
