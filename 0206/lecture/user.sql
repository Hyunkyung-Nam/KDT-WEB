-- use kdt;
-- SELECT * FROM kdt.user;
-- auto_increment는 알아서 데이터르 넣는다
-- 문자 홑따옴표에 넣어야한다
INSERT INTO user(username, age, address) VALUES ('홍길동', 17, '서울시 마포구');
INSERT INTO user(username, age, address) VALUES ('성춘향', 17, '서울시 마포구');
INSERT INTO user(username, age, address) VALUES ('변사또', 30, '서울시 용산구');
INSERT INTO user(username, age, address) VALUES ('임꺽정', 17, '서울시 서대문구');
INSERT INTO user(username, age, address) VALUES ('향단이', 18, '서울시 송파구');


-- USE kdt;
SELECT * FROM kdt.user; -- 전체 다나옴

-- 내가 컬럼쓴 순서로 나온다 두개 순서 다르게 나온다
-- SELECT username, age FROM user;
-- SELECT age, username FROM user;

-- 나이가 25세이상 비교연산
-- SELECT * FROM user WHERE age >= 25 ;
-- SELECT * FROM user WHERE age >=18 AND age <= 30;
-- SELECT * FROM user WHERE id = 7;
-- SELECT * FROM user WHERE username='홍길동';

-- SELECT * FROM user ORDER BY id DESC;

-- orderby는 where뒤에 써야한다
-- SELECT * FROM user WHERE age >= 18 ORDER BY age DESC;

-- LIKE 비교문자 이용하는거
-- %마포만 치면 안나옴
-- %마포% 이렇게 해야 마포구가 나온다
-- SELECT * FROM user WHERE address LIKE '%마포';
-- where address like %강남% 주소에 강남이 들어가는거 검색 
-- __향 땡떙 향이면 모두 검색
-- SELECT * FROM user WHERE username LIKE '__향';
-- SELECT * FROM user WHERE age BETWEEN 18 AND 30; -- 양쪽 모두 포함 
-- SELECT * FROM user WHERE age IN (18, 30) ORDER BY age LIMIT 3; -- limit은 맨마지막에 쓴다
-- SELECT * FROM user WHERE address IS NULL;
-- SELECT * FROM user WHERE address IS NOT NULL;
-- 데이터 바꾸는거
-- UPDATE user SET address = '부산시 해운대구' WHERE id = 1;

-- UPDATE user SET address = '대전시 서구', age = 31 WHERE id = 2;
-- updata where, delete where로 사용하기
-- id가 10이 삭제 되면 다시 생기지 않는다 (강제로 넣지않는 이상..)
-- 다른테이블에 연결되어있었을수도있어서 디비 무결성에 위배된다
-- DELETE FROM user WHERE id = 10;

