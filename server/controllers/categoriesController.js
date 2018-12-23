import dotenv from 'dotenv';
import dbConfig from '../database/dbConfig';

class CategoriesController {
  static getAll(req, res) {
    dbConfig.query('SELECT * FROM book_library.categories')
      .then((categories) => {
        res.status(200).json({
          status: true,
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
            status: true,
            message: 'Category found',
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

  static addNew(req, res) {
    const { category_name } = req.body;
    if (!category_name) {
      return res.status(400).json({
        message: 'Missing fields not allowed',
      });
    }
    const newCategory = category_name;
    dbConfig.query('INSERT INTO book_library.categories (category_name) VALUES ($1) RETURNING *', [category_name])
      .then((category) => {
        if (category.rowCount > 0) {
          res.status(200).json({
            status: true,
            message: 'Category added',
            data: category.rows,
          });
        } else {
          res.status(400).json({
            status: 'error',
            message: 'new category could not be added',
          });
        }
      })
      .catch((err) => {
        if (err.message.includes('unique')) {
          res.status(400).json({
            status: 'error',
            message: 'category already exists in the database',
          });
        } else {
          res.status(400).json({
            status: 'error',
            message: err.message,
          });
        }
      });
  }

  static delete(req, res) {
    const { category_id } = req.params;
    dbConfig.query(`DELETE FROM book_library.categories WHERE category_id = ${category_id}`)
      .then((category) => {
        if (category.rowCount) {
          res.status(200).json({
            status: true,
            message: 'category deleted',
          });
        } else {
          res.status(404).json({
            status: 'error',
            message: 'category not found',
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
