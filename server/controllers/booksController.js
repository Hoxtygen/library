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
    return res.status(200).json({
      message: 'All books available',
      Books,
    });
  }


  /**
 *
 *
 * @static
 * @param {*} req
 * @param {*} res
 * @returns
 * @memberof BookController
 */
  static addNew(req, res) {
    const {
      title, Author, pubYear, publisher,
    } = req.body;
    const newBook = {
      id: Books.length + 1,
      title,
      Author,
      pubYear,
      publisher,
    };
    if (!title || !Author || !pubYear || !publisher) {
      res.status(400).json({
        message: 'Missing fields present',
      });
    }
    //  console.log(newBook);
    Books.push(newBook);
    return res.status(201).json({
      message: 'book added',
      newBook,
    });
  }

  /**
 *
 *
 * @static
 * @param {*} req
 * @param {*} res
 * @returns
 * @memberof BookController
 */
  static deleteBook(req, res) {
    const bookId = parseInt(req.params.book_id, 10);
    let deleted;
    Books.map((book, index) => {
      if (book.book_id === bookId) {
        Books.splice(index, 1);
        deleted = book;
      }
    });
    if (deleted) {
      return res.status(200).json({
        message: 'book deleted',
      });
    }
    return res.status(404).json({
      message: 'book not found',
    });
  }

  /**
 *
 *
 * @static
 * @param {*} req
 * @param {*} res
 * @returns
 * @memberof BookController
 */
  static getOne(req, res) {
    const myBook = Books.find(book => book.book_id === parseInt(req.params.book_id, 10));
    if (myBook) {
      return res.status(200).json({
        message: 'book found',
        myBook,
      });
    }
    return res.status(404).json({
      message: 'book not found',
    });
  }


  /**
 *
 *
 * @static
 * @param {*} req
 * @param {*} res
 * @returns
 * @memberof BookController
 */
  static getTitle(req, res) {
    const query = req.params;
    const myBook = Books.find(book => book.title === query.title);
    if (myBook) {
      console.log(query.params);
      return res.status(200).json({
        message: 'result',
        myBook,
      });
    }
    return res.status(404).json({
      message: 'book title not found',
    });
  }

  /**
 *
 *
 * @static
 * @param {*} req
 * @param {*} res
 * @returns
 * @memberof BookController
 */
  static getAuthor(req, res) {
    const query = req.params;
    const myAuthor = Books.find(book => book.author === query.author);
    if (myAuthor) {
      return res.status(200).json({
        message: 'result',
        myAuthor,
      });
    }
    return res.status(404).json({
      message: 'Author not found',
    });
  }

  /**
 *
 *
 * @static
 * @param {*} req
 * @param {*} res
 * @returns
 * @memberof BookController
 */
  static getCategory(req, res) {
    const query = req.params;
    const myCategory = Books.find(book => book.category === query.category);
    if (myCategory) {
      return res.status(200).json({
        message: 'result',
        myCategory,
      });
    }
    return res.status(404).json({
      message: 'Author not found',
    });
  }

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns
   * @memberof BookController
   */
  static update(req, res) {
    const {
      title, Author, pubYear, publisher,
    } = req.body;
    if (!title || !Author || !pubYear || !publisher) {
      res.status(400).json({
        message: 'Missing fields not allowed',
      });
    }
    const id = parseInt(req.params.id, 10);
    let changedBook;
    let ChangedBookIndex;
    Books.map((book, index) => {
      if (book.id === id) {
        changedBook = book;
        ChangedBookIndex = index;
      }
    });
    if (!changedBook) {
      return res.status(404).json({
        message: 'book not found',
      });
    }
    const updatedBook = {
      id: changedBook.id,
      title: title || changedBook.title,
      Author: Author || changedBook.Author,
      pubYear: pubYear || changedBook.pubYear,
      publisher: publisher || changedBook.publisher,
    };
    Books.splice(ChangedBookIndex, 1, updatedBook);
    return res.status(200).json({
      message: 'book updated',
      updatedBook,
    });
  }
}

export default BookController;
