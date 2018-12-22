import { Router } from 'express';
import BookController from '../controllers/booksController';

const booksRouter = Router();
booksRouter.get('/books', BookController.getAllBooks);
booksRouter.get('/books/:book_id', BookController.getOne);
booksRouter.post('/books', BookController.addNew);
export default booksRouter;
