import { Router } from 'express';
import BookController from '../controllers/booksController';

const booksRouter = Router();
booksRouter.get('/books', BookController.getAllBooks);
booksRouter.get('/books/:book_id', BookController.getOne);
booksRouter.post('/books', BookController.addNew);
booksRouter.delete('/books/:book_id', BookController.deleteBook);
booksRouter.put('/books/:book_id', BookController.update);
export default booksRouter;
