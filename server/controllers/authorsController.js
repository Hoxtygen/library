import dotenv from 'dotenv';
import validation from 'express-validator';
import dbConfig from '../database/dbConfig';


class AuthorsController {
  static getAllAuthors(req, res) {
    dbConfig.query('SELECT * FROM book_library.authors')
      .then((authors) => {
        res.status(200).json({
          status: true,
          message: 'All authors',
          data: authors.rows,
        });
      });
  }

  static getOne(req, res) {
    const { author_id } = req.params;
    dbConfig.query(`SELECT * FROM book_library.authors WHERE author_id = ${author_id}`)
      .then((authors) => {
        if (authors.rowCount > 0) {
          res.status(200).json({
            status: true,
            message: 'author found',
            data: authors.rows,
          });
        } else {
          res.status(404).json({
            status: 'error',
            message: 'Author you are looking for could not be found',
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
    req.checkBody('author_name', 'Author name is required').notEmpty().trim();
    const errors = req.validationErrors();
    if (errors) {
      console.log(errors);
      return res.status(400).json({
        status: false,
        messsage: errors,
      });
    }
    const { author_name } = req.body;
    const newAuthor = author_name;
    dbConfig.query('INSERT INTO book_library.authors (author_name) VALUES ($1) RETURNING *', [author_name])
      .then((author) => {
        if (author.rowCount > 0) {
          res.status(200).json({
            status: true,
            message: 'Author added',
            data: author.rows,
          });
        } else {
          res.status(400).json({
            status: 'error',
            message: 'Author could not be added',
          });
        }
      })
      .catch((err) => {
        if (err.message.includes('unique')) {
          res.status(400).json({
            status: 'error',
            message: 'Author name already exists',
          });
        } else {
          res.status(400).json({
            status: 'error',
            message: err.message,
          }); 
        }
      });
  }

  /**
 *
 *
 * @static
 * @param {*} req
 * @param {*} res
 * @memberof AuthorsController
 */
  static delete(req, res) {
    const { author_id } = req.params;
    dbConfig.query(`DELETE FROM book_library.authors WHERE author_id = ${author_id}`)
      .then((author) => {
        if (author.rowCount) {
          res.status(200).json({
            status: true,
            message: 'Author deleted',
          });
        } else {
          res.status(404).json({
            status: 'error',
            message: 'Author not found',
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

  static update(req, res) {
    const { author_name } = req.body;
    if (!author_name) {
      return res.staus(400).json({
        message: 'missing field not allowed',
      });
    }
    const id = parseInt(req.params.author_id, 10);
    const query = `UPDATE book_library.authors SET author_name='${author_name}' WHERE author_id = ${id} RETURNING *`;
    dbConfig.query(query)
      .then((authorName) => {
        if (authorName.rowCount > 0) {
          res.status(200).json({
            status: true,
            message: 'Author information updated',
            data: authorName.rows,
          });
        } else {
          res.status(400).json({
            status: 'error',
            message: 'Author information could not be updated',
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

export default AuthorsController;
