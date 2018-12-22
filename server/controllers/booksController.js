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
}

export default BookController;
