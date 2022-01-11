USE Scientists;
-- exe 1
SELECT 'This is SQL Exercise, Practice and Solution';

-- exe 2
SELECT 1, 2, 3;

-- exe 3
SELECT 10 + 15;

-- exe 4
SELECT 20 * 5 + 2;

-- exe 5
SELECT * FROM Scientists;

-- exe 6
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;

-- exe 7
SELECT * FROM Scientists ORDER BY Name;

-- exe 8
SELECT * FROM Projects ORDER BY Name DESC;

-- exe 9
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS result FROM Projects;

-- exe 10
SELECT Name, Hours
FROM Projects
ORDER BY Hours DESC LIMIT 3;

-- exe 11
SELECT DISTINCT Project FROM AssignedTo;

-- exe 12
SELECT * FROM Projects
ORDER BY Hours DESC LIMIT 1;

-- exe 13
SELECT * FROM Projects
ORDER BY Hours LIMIT 1 OFFSET 1;

-- exe 14
SELECT * FROM Projects
ORDER BY Hours LIMIT 5;

-- exe 15
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;