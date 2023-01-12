Run `sqlite3 app.db` to create the server/app.db database and open the SQLite CLI.
Now, run `.read seed-data.sql` to run the .sql file having commands to create table and columns.
Exit the SQLite CLI using `Ctrl+d`.

then create .env file with DATA_SOURCE=dbname.db
and use this in server file (trees.js or app.js)
