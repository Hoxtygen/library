import { Router } from 'express';
import BookController from '../controllers/booksController';

const booksRouter = Router();
booksRouter.get('/books', BookController.getAllBooks);
booksRouter.get('/books/:id', BookController.getOne);
booksRouter.post('/books', BookController.addNew);
booksRouter.delete('/books/:id', BookController.deleteBook);
booksRouter.put('/books/:id', BookController.update);
booksRouter.get('/books/title/:title', BookController.getTitle);
booksRouter.get('/books/author/:author', BookController.getAuthor);
booksRouter.get('/books/category/:category', BookController.getCategory);
export default booksRouter;
