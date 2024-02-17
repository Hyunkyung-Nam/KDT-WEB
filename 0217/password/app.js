const express = require('express');
const crypto = require('crypto');
const bcrypto = require('bcrypt');
const { parseArgs } = require('util');
const app = express();
const PORT = 8000;
let sign = '';

app.use(express.json());

//라우터

app.post('/sign', (req, res) => {
    const { pw, data } = req.body;
    //const sign = createHashedPassword(String(pw)); //string으로 들어가지 않으면 에러가 난다
    //sign = createPdkdf(String(pw));
    //sign = cipherEncrypt(String(data));
    sign = bcryptPassword(pw);
    res.json({ result: sign });
});

app.post('/verify', (req, res) => {
    const { pw } = req.body;
    //const result = verifyPassword(String(pw), sign);
    //const result = decipher(sign);
    const result = comparePassword(pw, sign);
    res.json({ result });
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//단방향 암호화
//해쉬함수
const createHashedPassword = (password) => {
    //createHash(알고리즘).update(암호화할값).digest(인코딩 방식);
    return crypto.createHash('sha256').update(password).digest('base64');
};

//pdkdf2함수
const salt = crypto.randomBytes(16).toString('base64'); // 솔트생성. DB에 같이 저장해야함
const iterations = 1000; //반복횟수
const keylen = 64; // 생성할 키의 길이
const digest = 'sha256'; // 알고리즘
//process env넣어서 사용해야한다

//암호화 생성
const createPdkdf = (password) => {
    //pdkdf2(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘)으로 생성. 반환은 buffer값
    const sign = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
    console.log(sign);
    return sign.toString('base64');
};

//암호 비교
const verifyPassword = (password, dbPassword) => {
    const compare = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString('base64');
    return compare === dbPassword ? true : false;
};

//양방향
const algorithm = 'aes-256-cbc'; // 256bit키를 사용하고 블록크기는 128bit
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //초기화 벡터, 보안성을 높이기 위해 사용
//암호화
const cipherEncrypt = (word) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv); // 암호화 객체 생성
    let encryptedData = cipher.update(word, 'utf-8', 'base64'); // 암호화 할 데이터 처리
    encryptedData += cipher.final('base64'); //최종결과물 생성
    return encryptedData;
};
//복호화
const decipher = (encryptedData) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화 객체 생성
    let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8');
    decryptedData += decipher.final('utf-8');
    console.log('Decryted : ', decryptedData);
    return decryptedData;
};

//bcrypt 단방향
const saltNumber = 11; //10-11 정수값을쓰기
//암호화
const bcryptPassword = (password) => {
    return bcrypto.hashSync(password, saltNumber); //aync await하면 안써도됨
};
//비교
const comparePassword = (password, dbPassword) => {
    return bcrypto.compareSync(password, dbPassword); //순서중요
};
