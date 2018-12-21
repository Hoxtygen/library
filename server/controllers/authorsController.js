import dotenv from 'dotenv';
import dbConfig from '../database/dbConfig';


class AuthorsController {
  static getAllAuthors(req, res) {
    dbConfig.query('SELECT * FROM book_library.authors')
      .then((authors) => {
        res.status(200).json({
          message: 'All authors',
          data: authors.rows,
        });
      });
  }
}

export default AuthorsController;
