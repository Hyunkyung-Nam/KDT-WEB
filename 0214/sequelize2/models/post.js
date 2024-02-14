const { DataTypes, DATE } = require('sequelize');

const PostModel = (sequelize) => {
    return sequelize.define('post', {
        //컬럼 정의
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30), //기본이 255
            allowNull: false,
        },
        content: DataTypes.STRING(1000),
    });
};

module.exports = PostModel;
