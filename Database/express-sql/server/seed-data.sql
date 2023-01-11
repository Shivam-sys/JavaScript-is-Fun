DROP TABLE IF EXISTS colors;

CREATE TABLE colors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(32) UNIQUE
);

INSERT INTO colors (name)
VALUES
  ('Red'),
  ('White'),
  ('Blue');

-- To delete foreign keys from all child tables.
-- Consider T2 as a child table and T1 as parent table.
-- ALTER TABLE dbo.T2
  --  ADD CONSTRAINT FK_T1_T2_Cascade
  --  FOREIGN KEY (EmployeeID) REFERENCES dbo.T1(EmployeeID) ON DELETE CASCADE
  -- https://my.appacademy.io/lessons/delete-cascade/e269baa1/practices/delete-dependent-data-with-delete-cascade/5d0a85fe