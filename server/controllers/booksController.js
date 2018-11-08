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
}

export default BookController;
