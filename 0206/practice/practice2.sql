SELECT * FROM kdt.kdt_user;

INSERT INTO kdt_user (id, pw, username, gender, birthday, age) VALUES
('hong1234','8o4bkg','홍길동', 'M', '1990-01-31', 33),
('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
('power70', 'qwur8sda', '변사또', 'M', '1970-05-02', 53),
('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39),
('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
('dvadva',  'k3f3ah', '송하나', 'F', '2001-06-03', 22),
('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24); 

SELECT * FROM kdt_user ORDER BY birthday;
SELECT * FROM kdt_user WHERE gender = 'M' ORDER BY username DESC;
SELECT id, username FROM kdt_user WHERE birthday LIKE '199%';
SELECT * FROM kdt_user WHERE birthday LIKE '_____06%' ORDER BY birthday;
SELECT * FROM kdt_user WHERE gender= 'M' AND birthday LIKE '197%' ; 
SELECT * FROM kdt_user WHERE age ORDER BY age DESC LIMIT 3; 
SELECT * FROM kdt_user WHERE age BETWEEN 25 AND 50;
UPDATE kdt_user SET pw = '12345678' WHERE id = 'hong1234';
DELETE FROM kdt_user WHERE id = 'jungkrat';
