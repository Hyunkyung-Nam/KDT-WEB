'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);
// if (config.use_env_variable) {
//     sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//     sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

//모델
db.Post = require('./post')(sequelize);
db.Member = require('./member')(sequelize);
db.Profile = require('./profile')(sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

//1:1 관계
//foreignKey: 'memberId' 프로필모델에서 참조하는 외래키
db.Member.hasOne(db.Profile, { foreignKey: 'memberId', onDelete: 'CASCADE' });
//profile에서 쓰는 memberId이다. 'member'테이블의 id를 참조한다. sequelize가 자동으로  camelcase만들어줌,
// id도 sequelize가 알아서 만들어준다....
// Member안에있는 거랑은 다른 거다

//뒤에 옵션을 추가해 줄 수 있는데 위아래 똑같은 옵션을 줘야한다.
db.Profile.belongsTo(db.Member, { foreignKey: 'memberId', onDelete: 'CASCADE' });

//1:다 관계
db.Post.hasMany(db.Comment, { foreignKey: 'postId', onDelete: 'CASCADE' });
//db.Post.hasMany(db.Comment) 이렇게만해도된다. 자동으로 생성해줌!
//참조하는 테이블의 index값을 참조
db.Comment.belongsTo(db.Post, { foreignKey: 'postId', onDelete: 'CASCADE' });

//유저랑 게시글 1:다 관계
db.Member.hasMany(db.Comment, { foreignKey: 'memberId', onDelete: 'CASCADE' });
db.Post.belongsTo(db.Post, { foreignKey: 'memberId', onDelete: 'CASCADE' });

//유저랑 댓글 1:다 관계
db.Member.hasMany(db.Comment, { foreignKey: 'memberId', onDelete: 'CASCADE' });
db.Comment.belongsTo(db.Post, { foreignKey: 'memberId', onDelete: 'CASCADE' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
