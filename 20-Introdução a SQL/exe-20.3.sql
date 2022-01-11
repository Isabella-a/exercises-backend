-- exe 1
SELECT * FROM Pecas
WHERE name LIKE 'GR%';

-- exe 2
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

-- exe 3
SELECT peca, preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

-- exe 4
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

-- exe 5
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

-- exe 6
SELECT * FROM Fornecimentos
WHERE Preco > 15 AND Preco < 40
ORDER BY Preco;

-- exe 7
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';