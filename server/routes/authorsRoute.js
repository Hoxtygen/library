import { Router } from 'express';
import AuthorsController from '../controllers/authorsController';

const authorsRouter = Router();
authorsRouter.get('/authors', AuthorsController.getAllAuthors);
authorsRouter.get('/authors/:author_id', AuthorsController.getOne);

export default authorsRouter;