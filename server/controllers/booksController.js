import dotenv from 'dotenv';
import dbConfig from '../database/dbConfig';
import Books from '../database/books';

class BookController {
  static getAllBooks(req, res) {
    return res.status(200).json({
      message: 'All books available',
      Books,
    });
  }
}

export default BookController;
