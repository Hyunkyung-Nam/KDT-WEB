CREATE TABLE customer (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    username VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

INSERT INTO customer (id, username, birthday) VALUES
('aaa', '홍길동', '1990-03-17'),
('bbb', '성춘향', '1992-02-06'),
('ccc', '이몽룡', '1991-05-13');

CREATE TABLE orderlist (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    customer_id VARCHAR(10) NOT NULL,  -- 위의 내용중 primary key만 빼고 적으면된다
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    -- 뒤에 제약조건을 더 넣을 수 있다 ON DELETE CASCADE 등
    FOREIGN KEY (customer_id) REFERENCES customer(id) 
);

INSERT INTO orderlist(customer_id, product_name, quantity) VALUES
('aaa','맥북프로',1),
('bbb','모니터',10),
('ccc','키보드',3),
('bbb', '핸드폰', 2),
('ccc', '마우스', 10);


-- SELECT * FROM kdt.orderlist;

-- inner join
-- 주의할점!! 왼쪽 오른쪽 동일한 culumn이 들어갈 수 있다. orderlist.quantity이런식으로 가져오기
-- SELECT customer.id, customer.username, orderlist.product_name, orderlist.quantity FROM customer 
-- INNER JOIN orderlist ON customer.id = orderlist.customer_id 
-- WHERE orderlist.quantity >= 5;

-- AS를 사용하여 이름 간단하게 바꿔서 사용가능
SELECT customer.id, customer.username, orderlist.product_name, orderlist.quantity FROM customer 
INNER JOIN orderlist ON customer.id = orderlist.customer_id 
WHERE orderlist.quantity >= 5;



CREATE TABLE departments(
    department_id INT PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL,
);

DROP TABLE employees;

CREATE TABLE employees(
    employees_id INT PRIMARY KEY, 
    username VARCHAR(31) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO departments (department_id, department_name) VALUES
(1, '기획팀'),
(2, 'IT개발팀'),
(3,'디자인팀');

INSERT INTO employees (employees_id, username, department_id) VALUES VALUES
(1, '홍길동', 2),
(2, '성춘향', 3),
(3, '이몽룡', NULL),
(4, '임꺽정', 2),
(5, '황진이',1);

SELECT a.employees_id, a.username, b.department_name 
FROM employees AS a INNER JOIN departments AS b 
ON a.department_id = b.department_id;
-- 이몽룡이 사라졌음 양쪽에 있는데이터만 가져오는거