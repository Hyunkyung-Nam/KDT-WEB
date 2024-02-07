CREATE TABLE users(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL ,
    username VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M','') DEFAULT '', -- 열거형 데이터 안에쓴는 거 밖에 못온다 그이외값이 오면 오류
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

INSERT INTO users (id, pw, username, gender, birthday, age) VALUES
('hong1234','8o4bkg','홍길동', 'M', '1990-01-31', 33),
('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
('power70', 'qwur8sda', '변사또', 'M', '1970-05-02', 53),
('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39),
('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
('dvadva',  'k3f3ah', '송하나', 'F', '2001-06-03', 22),
('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24); 

-- birthday기준 오름차순 정렬
SELECT * FROM users ORDER BY birthday ASC;
-- gender = 'M', name기준 내림차순
SELECT * FROM users WHERE gender = 'M' ORDER BY username DESC;
--1990년대 태어난 아이디, 이름 가져오기
SELECT id, username FROM users WHERE birthday LIKE '199%';
-- 6월생 회원의 목록을  birthday 기준으로 오름차순
SELECT * FROM users WHERE birthday LIKE '%-06-%' ORDER BY ASC;
-- gender 컬럼의 값이 m이고 1970년대 회원
SELECT * FROM users WHERE gender = 'M' AND birthday LIKE '197%';
-- 모든회원목록중 age 내림차순 처음3개만 가져오기
SELECT * FROM users ORDER BY age DESC LIMIT 3;
-- 모든 회원 목록중 나이가 25살이상 50이하인 회원
SELECT * FROM users WHERE age >= 25 AND age <=50;
SELECT * FROM users WHERE age BETWEEN 25 AND 50;
-- id 컬럼의 값이 hong1234인 레코드의 pw컬럼 값을 12345678로 변경
UPDATE users SET pw = '12345678' WHERE id = 'hong1234';
-- id칼럼의 값이 jungkrat인 레코드 삭제
DELETE FROM users WHERE id = 'jungkrat'; 
