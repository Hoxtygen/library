import { Router } from 'express';
import BookController from '../controllers/booksController';

const booksRouter = Router();
booksRouter.get('/books', BookController.getAllBooks);
booksRouter.get('/books/:id', BookController.getOne);
booksRouter.post('/books', BookController.addNew);
booksRouter.delete('/books/:id', BookController.deleteBook);

export default booksRouter;
