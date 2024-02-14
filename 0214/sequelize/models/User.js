const { DataTypes } = require('sequelize');
const UserModel = (sequerlize) => {
    //테이블 하나당 파일하나씩 만들어야함! 그래야 관리할 수 있음
    const User = sequerlize.define(
        'user00',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, // NOT NULL설정
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
        },
        {
            tableName: 'user00',
            freezeTableName: true,
            timestamps: false,
        }
    );

    return User;
};

module.exports = UserModel; // 왜 여기는 괄호를 안쓰는가!! 너무 어렵다...ㅋㅋㅋ ㅠㅠㅠ
