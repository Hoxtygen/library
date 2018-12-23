import dotenv from 'dotenv';
import dbConfig from '../database/dbConfig';

class CategoriesController {
  static getAll(req, res) {
    dbConfig.query('SELECT * FROM book_library.categories')
      .then((categories) => {
        res.status(200).json({
          message: 'All categories',
          data: categories.rows,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: 'error',
          message: err.message,
        });
      });
  }
}

export default CategoriesController;
