const mysql = require('mysql2/promise'); //비동기 방식쓸거니까 promise까지 쓰면된다
require('dotenv').config();

/*createConnection : 단일연결
 * 요청할때마다 새로운 연결을 생성해야한다
 * 적은수의 동시연결이나 단순한 데이터베이스 쿼리일 때 사용
 * 
 * const getConn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: process.env.DBID,
        password: process.env.DBPW,
        database: 'kdt11',
        port: 3306,
    });
};
 **/

/**
 * createPool : 다중연결
 * 연결 풀을 생성. 풀은 미리 정의된 수의 연결을 생성하고 관리
 * 요청이 들어오면 연결 풀에서 사용가능한 연결을 제공. 작업완료 후 해당연결을 반환
 * 연결이 필요하지 않을 경우 자동으로 반환, 풀의 연결 수를 제한하고 관리를 최적화
 * 일반적인 웹서비스에 적합
 * default값 10개
 */

const conn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DBID,
    password: process.env.DBPW,
    database: process.env.DATABASE,
    port: process.env.PORT,
    connectionLimit: 15, //최대연결수(기본값 10)
});

exports.signup = async (data) => {
    const query = 'INSERT INTO user00 (userid, password, username) VALUE (?,?,?)';
    const [result] = await conn.query(query, [data.userid, data.userpw, data.username]);
    return result;
};

exports.login = async (data) => {
    const query = 'SELECT * FROM user00 WHERE userid=? AND password=?';
    const [rows] = await conn.query(query, [data.userid, data.userpw]);
    return rows;
};

exports.info = async (id) => {
    const query = 'SELECT * FROM user00 WHERE id=?';
    const [rows] = await conn.query(query, [id]);
    return rows;
};

exports.update = async (data) => {
    const query = 'UPDATE user00 SET password=?, username=? WHERE id=?';
    const [result] = await conn.query(query, [data.userpw, data.username, Number(data.id)]);
    return result;
};

exports.delete = async (data) => {
    const query = 'DELETE FROM user00 WHERE id=?';
    const [result] = await conn.query(query, [data.id]);
    return result;
};
