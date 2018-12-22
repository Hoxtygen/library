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
}

export default BookController;
