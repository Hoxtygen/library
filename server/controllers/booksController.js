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

  static deleteBook(req, res) {
    const id = parseInt(req.params.id, 10);
    let deleted;
    Books.map((book, index) => {
      if (book.id === id) {
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

  static getOne(req, res) {
    const myBook = Books.find(book => book.id === parseInt(req.params.id, 10));
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
