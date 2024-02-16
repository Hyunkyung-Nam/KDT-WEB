const { Post, Comment } = require('../models');

//전체글 조회
exports.all = async (req, res) => {
    try {
        const result = await Post.findAll({ order: [['id', 'DESC']] });
        console.log('all', result);
        res.json({ result: true, data: result });
    } catch (error) {}
};

//하나 조회
exports.post = async (req, res) => {
    try {
        //const result = await Post.findOne({ where: { id: req.params.id } });
        const result = await Post.findByPk(req.params.id, { include: [{ model: Comment }] });
        //table의 정보를 다가져 오고 싶을 때 include생략이 가능함
        // const result = await Post.findByPk(req.params.id, { include: Comment});
        // include : 쿼리를 실행할 때 관련된 모델의 데이터도 함깨 조회할 수 있도록 하는 옵션
        res.json({ result: true, data: result });
    } catch (error) {}
};

//하나 생성
exports.write = async (req, res) => {
    const { id: memberid, title, content } = req.body;
    try {
        const result = await Post.create({ title, content, memberId: memberid });
        console.log('write', result);
        res.json({ result: true, data: { id: result.id } });
    } catch (error) {
        console.log(error);
    }
};

//하나 수정
exports.update = async (req, res) => {
    const { id, title, content } = req.body;
    try {
        const result = await Post.update({ title, content }, { where: { id } });
        console.log('update', result);
        res.json({ result: true });
    } catch (error) {}
};
//하나 삭제
exports.delete = async (req, res) => {
    const result = await Post.destroy({ where: { id: req.body.id } });
    console.log('delete', result);
    res.json({ result: true });
};

exports.comment = async (req, res) => {
    const { postid, memberid, content } = req.body;
    const result = await Comment.create({ content, postId: postid, memberId: memberid });
    console.log(result);
    res.json({ result: true });
};

exports.deleteComment = async (req, res) => {
    const { id: postid } = req.body;
    const result = await Comment.destroy({ where: { id: postid } });
    console.log(result);
    res.json({ result: true });
};
