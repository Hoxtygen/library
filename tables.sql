CREATE SCHEMA book_library

CREATE TABLE IF NOT EXISTS book_library.authors (
    book_id SERIAL PRIMARY KEY NOT NULL,
    author_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS book_library.categories (
    category_id SERIAL PRIMARY KEY NOT NULL,
    category_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS book_library.books(
    book_id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(1000) UNIQUE NOT NULL,
    pubyear INTEGER NOT NULL,
    publisher VARCHAR(500) NOT NULL,
    author_id INTEGER REFERENCES book_library.authors(author_id) NOT NULL,
    category_id INTEGER REFERENCES book_library.categories(category_id) NOT NULL,
    image_url VARCHAR(5000) NOT NULL,
    FOREIGN KEY(author_id) REFERENCES authors(author_id),
    FOREIGN KEY(categories_id) REFERENCES categories(category_id)
);

 
INSERT INTO book_library.authors (author_name) VALUES ('Jeffery Deaver')
INSERT INTO book_library.authors (author_name) VALUES ('Michael Connelly')
INSERT INTO book_library.authors (author_name) VALUES ('Robin Cook')

INSERT INTO book_library.categories (category_name) VALUES ('novel')
INSERT INTO book_library.categories (category_name) VALUES ('textbook')


INSERT INTO book_library.books (title, pubyear, publisher, author_id, category_id, image_url) VALUES('Chromosome 6', 1997, 'Putnam Adult', 3, 1, 'https://i38.photobucket.com/albums/e143/hoxtygen/Library%20App/chromosome6_zpsogtfenoe.jpg');