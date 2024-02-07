USE kdt;

CREATE TABLE employees (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, -- not null 안써도되긴하지만 명시적으로 적음
    username VARCHAR(31) NOT NULL, 
    department VARCHAR(31) NOT NULL,
    salary INT
);

SELECT * FROM kdt.employees;

-- INSERT INTO employees (username, department, salary) VALUES
-- ('홍길통', 'IT개발팀', 5000),
-- ('이몽룡', '마케팅팀', 4800),
-- ('성춘향', '디자인팀', 4500),
-- ('임꺽정', 'IT개발팀', 7000),
-- ('흥부', 'IT개발팀', 10000),
-- ('변사또', '경영지원팀', 5000),
-- ('놀부', '마케팅팀', 3000),
-- ('황진이', '디자인팀', 5000);

-- 중복이 제거된 부서나온다
-- SELECT DISTINCT department FROM employees;

-- group by 중복제거를 위해서도 쓰지만 sum이나 이런거 계산을 할때 사용
-- avr하면 새로 컬럼을 만들어줌
-- 앞에 select 2개는 고르른거
-- 뒤에는 어디에서 선택할지
-- SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department HAVING AVG(salary) >= 5000;

-- SELECT sum(salary) AS sum_salary FROM employees;
-- 행이 몇개야!
SELECT count(*) AS count_employees FROM employees GROUP BY department;

