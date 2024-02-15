const { DataTypes } = require('sequelize');
const memberModel = (sequelize) => {
    return sequelize.define(
        'member',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: DataTypes.STRING(31),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {}
    );
};

module.exports = memberModel;
