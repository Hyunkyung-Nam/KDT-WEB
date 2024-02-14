const { Post } = require('../models');

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
        const result = await Post.findOne({ where: { id: req.params.id } });
        res.json({ result: true, data: result });
    } catch (error) {}
};

exports.write = async (req, res) => {
    const { title, content } = req.body;
    try {
        const result = await Post.create({ title, content });
        console.log('write', result);
        res.json({ result: true, data: { id: result.id } });
    } catch (error) {}
};

exports.update = async (req, res) => {
    const { id, title, content } = req.body;
    try {
        const result = await Post.update({ title, content }, { where: { id } });
        console.log('update', result);
        res.json({ result: true });
    } catch (error) {}
};
//하나삭제
exports.delete = async (req, res) => {
    const result = await Post.destroy({ where: { id: req.body.id } });
    console.log('delete', result);
    res.json({ result: true });
};
