import { Router } from 'express';
import BookController from '../controllers/booksController';

const booksRouter = Router();
booksRouter.get('/books', BookController.getAllBooks);

export default booksRouter;
