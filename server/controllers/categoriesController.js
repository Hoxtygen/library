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

  static getOne(req, res) {
    const { category_id } = req.params;
    dbConfig.query(`SELECT * FROM book_library.categories WHERE category_id = ${category_id}`)
      .then((category) => {
        if (category.rowCount > 0) {
          res.status(200).json({
            status: 'Category found',
            data: category.rows,
          });
        } else {
          res.status(404).json({
            status: 'error',
            message: 'Category not found',
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

export default CategoriesController;
