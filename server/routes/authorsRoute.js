import { Router } from 'express';
import AuthorsController from '../controllers/authorsController';

const authorsRouter = Router();
authorsRouter.get('/authors', AuthorsController.getAllAuthors);

export default authorsRouter;
