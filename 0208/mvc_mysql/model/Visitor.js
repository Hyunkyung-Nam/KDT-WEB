const mysql = require('mysql2/promise'); // mysql2아니고 mysql2 promise
require('dotenv').config();
//mysql 연결
const getConn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: process.env.mysqlUser,
        password: process.env.mysqlPw,
        database: 'kdt',
        port: 3306,
    });
};
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: process.env.mysqlUser,
//     password: process.env.mysqlPw,
//     database: 'kdt',
//     port: 3306,
// });

// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('mysql connect');
// });

//쿼리문 작성
// const allVisitor = (cb) => {
//     const query = 'SELECT * FROM visitor';
//     connection.query(query, (err, rows) => {
//         console.log(rows);
//     });
// };

//문자열 보간방법
//'SELECT * FROM visitor';
//단점
// 1. sql injection 공격에 취약
// 2. 문자열에 특수문자가 포함될 경우 디비 오류가 발생될 수도 있음
//prepared statement
//SELECT * FROM visitor WHERE id= ?
// 아이디를 ?로 바꿔버림

//전체 방명록 조회
const allVisitor = async () => {
    //직접 연결시키고
    const conn = await getConn();
    const query = 'SELECT * FROM visitor';
    const [rows] = await conn.query(query); //배열로 와서 구조분해할당시켜주면된다
    await conn.end();
    //직접 종료 시켜야한다
    return rows;
};

//하나 방명록 조회
const getVisitor = async (id) => {
    const conn = await getConn();
    //const query = `SELECT * FROM visitor WHERE id=${id}`;
    const query = 'SELECT * FROM visitor WHERE id=?';
    const [rows] = await conn.query(query, [id]); //꼭 배열형태로 넣어야한다
    await conn.end();
    return rows;
};
const postVisitor = async (data) => {
    const conn = await getConn();
    //const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}','${data.comment}')`;
    const query = 'INSERT INTO visitor (name, comment) VALUES (?,?)';
    const [result] = await conn.query(query, [data.name, data.comment]);
    await conn.end();
    return result; //insert는 성공실패만 알려줌
};
const patchVisitor = async (data) => {
    const conn = await getConn();
    //const query = `UPDATE visitor SET name='${data.name}', comment='${data.comment}'WHERE id=${data.id}`;
    const query = 'UPDATE visitor SET name=?, comment=? WHERE id=?';
    const [result] = await conn.query(query, [data.name, data.comment, data.id]);
    await conn.end();
    return result;
};
const deleteVisitor = async (id) => {
    const conn = await getConn();
    // const query = `DELETE FROM visitor WHERE id=${id}`;
    const query = 'DELETE FROM visitor WHERE id=?';
    const [result] = await conn.query(query, id);
    await conn.end();
    return result;
};
module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor }; // 함수 꼭 괄호안에 넣어서 내보내기
