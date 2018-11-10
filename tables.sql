\c library
CREATE TABLE IF NOT EXISTS leaders (
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR (400) NOT NULL,
    author VARCHAR (100) NOT NULL,
    pubYear INT NOT NULL,
    publisher VARCHAR (100) NOT NULL
)