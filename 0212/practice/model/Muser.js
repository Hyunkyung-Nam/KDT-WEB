const mysql = require('mysql2/promise'); // mysql2아니고 mysql2 promise
require('dotenv').config();
//mysql 연결
const getConn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: process.env.DBID,
        password: process.env.DBPW,
        database: 'kdt',
        port: 3306,
    });
};

const register = async (data) => {
    const conn = await getConn();
    const query = 'INSERT INTO user (userid, name, pw) VALUES (?,?,?)';
    const [result] = await conn.query(query, [data.userid, data.username, data.userpw]);
    await conn.end();
    return result;
};

const login = async (data) => {
    const conn = await getConn();
    const query = 'SELECT * FROM user WHERE userid=? AND pw=?';
    const [rows] = await conn.query(query, [data.userid, data.userpw]);
    await conn.end();
    return rows.length === 0 ? { status: false } : { status: true, userInfo: rows };
};

const getUserInfo = async (id) => {
    const conn = await getConn();
    const query = 'SELECT * FROM user WHERE id=?';
    const [rows] = await conn.query(query, [Number(id)]);
    await conn.end();
    return rows;
};
const updateInfo = async (data) => {
    const conn = await getConn();
    const query = 'UPDATE user SET userid=?, pw=?, name=? WHERE id=?';
    const [result] = await conn.query(query, [data.userid, data.userpw, data.username, Number(data.id)]);
    await conn.end();
    return result;
};

const deleteUser = async (id) => {
    const conn = await getConn();
    const query = 'DELETE FROM user WHERE id=?';
    const [result] = await conn.query(query, [Number(id)]);
    await conn.end();
    return result;
};
module.exports = { register, login, getUserInfo, updateInfo, deleteUser };
