-- Exe 1
SELECT * FROM sakila.category;
USE sakila;
CREATE FULLTEXT INDEX category_name_index ON category(name);

SHOW columns FROM category;

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- COST 0.35

DROP INDEX category_name_index ON category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- COST 1.85

-- Exe 2
CREATE INDEX address_index ON address(postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- COST 0.35

DROP INDEX address_index ON address;
-- COST 61.80