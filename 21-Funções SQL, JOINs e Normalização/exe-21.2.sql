SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;
SELECT * FROM Pixar.BoxOffice;

-- ex 1
SELECT mo.id, mo.title, box.domestic_sales, box.international_sales
FROM Pixar.Movies AS mo
INNER JOIN BoxOffice AS box
ON mo.id = box.movie_id;

-- ex 2
SELECT m.id, m.title, box.domestic_sales, box.international_sales
FROM Pixar.Movies AS m
INNER JOIN BoxOffice AS box
ON (m.id = box.movie_id AND box.international_sales > box.domestic_sales);

-- ex 3
SELECT m.id, m.title, box.rating
FROM Pixar.Movies m
INNER JOIN BoxOffice box
ON m.id = box.movie_id
ORDER BY box.rating DESC;

-- ex 4
SELECT t.id, t.name, t.location, m.title
FROM Pixar.Theater AS t
LEFT JOIN Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

-- ex 5
SELECT t.name, t.location, m.title, m.director, m.`year`, m.length_minutes
FROM Pixar.Movies m
RIGHT JOIN Theater t
ON m.theater_id = t.id
ORDER BY t.name;

-- ex 6
SELECT m.title, b.rating
FROM Pixar.Movies m
INNER JOIN BoxOffice b
ON b.rating > 7.5 AND m.id = b.movie_id;

SELECT title
FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id
    FROM Pixar.BoxOffice
    WHERE rating > 7.5
);

-- ex 7
SELECT m.title, m.`year`, b.rating
FROM Pixar.Movies m
INNER JOIN BoxOffice b
ON m.id = b.movie_id AND m.year > 2009;

SELECT rating
FROM Pixar.BoxOffice
WHERE movie_id IN (
	SELECT id
		FROM Pixar.Movies
        WHERE `year` > 2009
	);

-- ex 8
SELECT `name`, location 
FROM Pixar.Theater AS t
WHERE EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE t.id = Movies.theater_id
);

-- ex 9
SELECT `name`, location
FROM Pixar.Theater AS t
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies
    WHERE t.id = Movies.theater_id
);

