require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DBID,
        password: process.env.DBPW,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: 'mysql',
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
    },
    production: {
        username: process.env.PRDBID,
        password: process.env.PRDBPW,
        database: process.env.PRDATABASE,
        host: process.env.PRHOST,
        dialect: 'mysql',
    },
};
