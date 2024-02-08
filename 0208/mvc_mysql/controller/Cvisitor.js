const Visitor = require('../model/Visitor');

//방명록 전체 가져오기
exports.allVisitor = async (req, res) => {
    const response = await Visitor.allVisitor();
    console.log(response);
    res.json({ result: response });
    //res.send()
    //res.json()
};

//바아명록 하나 가져오기
exports.getVisitor = async (req, res) => {
    console.log(req.params.id);
    const data = await Visitor.getVisitor(req.params.id);
    console.log(data);
    res.json({ result: data });
};
//방명록 하나 작성
exports.postVisitor = async (req, res) => {
    console.log(req.body);
    const result = await Visitor.postVisitor(req.body);
    console.log(result);
    res.json({ result: true, id: result.insertId, name: req.body.name, comment: req.body.comment });
};
//방명록 하나 수정
exports.patchVisitor = async (req, res) => {
    console.log(req.body);
    await Visitor.patchVisitor(req.body);
    res.json({ result: true }); //update는 성공실패만 알려줌
};
exports.deleteVisitor = async (req, res) => {
    console.log(req.body);
    await Visitor.deleteVisitor(req.body.id);
    res.json({ result: true });
};
