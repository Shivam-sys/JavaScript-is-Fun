--Insert new cat named "Red" born this year
INSERT INTO cats (name, birth_year)
VALUES ('Red', 2023);
--Assign ownership of new cat to George Beatty using subqueries
INSERT INTO cat_owners
VALUES (
    (
      SELECT id
      from owners
      WHERE first_name = 'George'
        AND last_name = 'Beatty'
    ),
    (
      SELECT id
      from cats
      WHERE name = 'Red'
    )
  );
-- Query to verify INSERTs worked properly
SELECT *
FROM cats;
SELECT *
FROM cat_owners;
SELECT owners.first_name,
  cats.name
FROM owners,
  cats
WHERE owners.id =(
    SELECT owner_id
    FROM cat_owners
    WHERE cat_id = (
        SELECT id
        FROM cats
        WHERE name = 'Red'
      )
  )
  AND cats.id = (
    SELECT id
    FROM cats
    WHERE name = 'Red'
  );