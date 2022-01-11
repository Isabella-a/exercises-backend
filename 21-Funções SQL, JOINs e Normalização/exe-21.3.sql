-- STORE PROCEDURES
-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes.
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator
-- ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE PopularActors()
BEGIN
	SELECT actor_id, COUNT(*) AS 'Quantidade de Filmes'
    FROM film_actor
    GROUP BY actor_id
    ORDER BY 'Quantidade de Filmes' DESC
    LIMIT 10;
END $$
DELIMITER ;

CALL PopularActors();

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que
-- exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada.
-- Use as tabelas film , film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE SearchFromCategory(IN category VARCHAR(50))
BEGIN
	SELECT fc.film_id, f.title, fc.category_id, c.name
    FROM category AS c
    INNER JOIN film_category AS fc
    ON c.category_id = fc.category_id
    INNER JOIN film AS f
    ON f.film_id = fc.film_id
    WHERE c.name LIKE category;
END $$
DELIMITER ;

CALL SearchFromCategory('Action');

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não
-- ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$

CREATE PROCEDURE CheckingActiveClient(
	IN emailCustomer VARCHAR(100),
    OUT activeCustomer INT
)
BEGIN
	SELECT `active` INTO activeCustomer
    FROM customer
    WHERE email = emailCustomer;
END $$
DELIMITER ;

SELECT @ActiveStatus;
CALL CheckingActiveClient('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;

-- STORE FUNCTIONS
-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos
-- até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$

CREATE FUNCTION TotalPayments(id INT)
RETURNS DOUBLE READS SQL DATA
BEGIN
	DECLARE total DOUBLE;
    SELECT SUM(amount)
    FROM payment
    WHERE customer_id = id
    INTO total;
    RETURN total;
END $$
DELIMITER ;

SELECT TotalPayments(1);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao
-- registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION InventoryFilm(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE nomeFilme VARCHAR(100);
    SELECT f.title
    FROM film AS f
    INNER JOIN inventory AS i
    ON f.film_id = i.film_id
    WHERE inventory_id = id
    INTO nomeFilme;
    RETURN nomeFilme;
END $$
DELIMITER ;

SELECT InventoryFilm(1);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' )
-- e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$

CREATE FUNCTION TotalMoviesFromCategory(nome VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total INT;
    SELECT COUNT(*)
    FROM film_category AS fc
    INNER JOIN category AS c
    ON fc.category_id = c.category_id
    WHERE nome = c.name
    INTO total;
    RETURN total;
END $$
DELIMITER ;

SELECT TotalMoviesFromCategory('Action');

-- TRIGGERS
CREATE DATABASE IF NOT EXISTS BeeMovies;

USE BeeMovies;

CREATE TABLE movies(
    movie_id INT PRIMARY KEY auto_increment,
    ticket_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ticket_price_estimation VARCHAR(15),
    release_year YEAR
) engine = InnoDB;

CREATE TABLE movies_logs(
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    executed_action VARCHAR(15) NOT NULL,
    log_date DATE NOT NULL
) engine = InnoDB;

-- 1. Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual
-- de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano.
-- Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , informando o
-- movie_id do filme que acaba de ser inserido na tabela movies , a executed_action como 'INSERT' e a log_date como
-- a data atual.




-- 2. Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o valor anterior de
-- ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na
-- coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário, insira o valor 'Decreasing' .
-- Adicionalmente, insira um novo registro na tabela movies_logs , contendo informações sobre o registro alterado
-- ( movie_id , executed_action e log_date ).




-- 3. Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação
-- para a tabela movies_logs , onde devem ser guardados a data da exclusão, a executed_action 'DELETE' e o
-- id do filme excluído.

