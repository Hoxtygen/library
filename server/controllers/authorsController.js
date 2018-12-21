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

  static getOne(req, res) {
    const { author_id } = req.params;
    dbConfig.query(`SELECT * FROM book_library.authors WHERE author_id = ${author_id}`)
        .then((authors) => {
            if (authors.rowCount > 0) {
                res.status(200).json({
                    message: 'author found',
                    data: authors.rows,
                });
            } else {
                res.status(404).json({
                    status: 'error',
                    message: 'Author you are looking for could not be found',
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                status: "error",
                message: err.message
            })
        })
  }
}

export default AuthorsController;
