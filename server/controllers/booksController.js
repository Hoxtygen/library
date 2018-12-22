import dotenv from 'dotenv';
import dbConfig from '../database/dbConfig';
import Books from '../database/books';

class BookController {
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns
   * @memberof BookController
   */
  static getAllBooks(req, res) {
    dbConfig.query('SELECT * FROM book_library.books NATURAL JOIN authors NATURAL JOIN categories')
      .then((books) => {
        res.status(200).json({
          message: 'All books',
          data: books.rows,
        });
      });
  }

  static getOne(req, res) {
    const { book_id } = req.params;
    dbConfig.query(`SELECT * FROM book_library.books WHERE book_id = ${book_id}`)
      .then((books) => {
        if (books.rowCount > 0) {
          res.status(200).json({
            message: 'Book found',
            data: books.rows,
          });
        } else {
          res.status(404).json({
            status: 'error',
            message: 'The book you are looking for could not be found',
          });
        }
      })
      .catch((err) => {
        res.status(400).json({
          status: 'error',
          message: err.message,
        });
      });
  }

  static addNew(req, res) {
    const {
      title, pubyear, publisher, author_id, category_id, image_url,
    } = req.body;
    if (!title || !pubyear || !publisher || !author_id || !category_id || !image_url) {
      return res.json(400).json({
        message: 'missing fields not allowed',
      });
    }
    const newBook = {
      title,
      pubyear,
      publisher,
      author_id,
      category_id,
      image_url,
    };

    dbConfig.query('INSERT INTO book_library.books (title, pubyear, publisher, author_id, category_id, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [title, pubyear, publisher, author_id, category_id, image_url])
      .then((book) => {
        if (book.rowCount > 0) {
          res.status(200).json({
            message: 'Book added',
            data: book.rows,
          });
        } else {
          res.status(400).json({
            status: 'error',
            message: 'Book could not be added',

          });
        }
      })
      .catch((err) => {
        res.status(400).json({
          status: 'error',
          message: err.message,
        });
      });
  }

  static deleteBook(req, res) {
    const { book_id } = req.params;
    dbConfig.query(`DELETE FROM book_library.books WHERE book_id = ${book_id}`)
      .then((book) => {
        if (book.rowCount) {
          res.status(200).json({
            message: 'Book deleted',
          });
        } else {
          res.status(404).json({
            status: 'error',
            message: 'Book not found',
          });
        }
      })
      .catch((err) => {
        res.status(404).json({
          status: 'error',
          message: err.message,
        });
      });
  }

  static update(req, res) {
    const {
      title, pubyear, publisher, author_id, category_id, image_url,
    } = req.body;
    if (!title || !pubyear || !publisher || !author_id || !category_id || !image_url) {
      return res.json(400).json({
        message: 'missing fields not allowed',
      });
    }
    const id = parseInt(req.params.book_id, 10);
    const query = `UPDATE book_library.books SET title='${title}', pubyear = '${pubyear}', publisher = '${publisher}', author_id = '${author_id}', category_id = '${category_id}', image_url = '${image_url}'  WHERE book_id = ${id} RETURNING *`;
    dbConfig.query(query)
      .then((book) => {
        if (book.rowCount > 0) {
          res.status(200).json({
            message: 'Book updated',
            data: book.rows,
          });
        } else {
          res.status(400).json({
            status: 'error',
            message: 'Book could not be updated',
          });
        }
      })
      .catch((err) => {
        res.status(404).json({
          status: 'error',
          message: err.message,
        });
      });
  }
}

export default BookController;
