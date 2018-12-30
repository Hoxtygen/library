import { Router } from 'express';
import cors from 'cors';
import BookController from '../controllers/booksController';

//  const { validateBody, schemas } = require('../validation/routeValidation')


const booksRouter = Router();
booksRouter.get('/books', cors({ methods: 'POST'}), BookController.getAllBooks);
booksRouter.get('/books/:book_id', BookController.getOne);
booksRouter.post('/books', BookController.addNew);
booksRouter.delete('/books/:book_id', BookController.deleteBook);
booksRouter.put('/books/:book_id', BookController.update);
export default booksRouter;


// validateBody(schemas.authSchema),