import { Router } from 'express';
import AuthorsController from '../controllers/authorsController';

const authorsRouter = Router();
authorsRouter.post('/authors', AuthorsController.addNew)
authorsRouter.get('/authors', AuthorsController.getAllAuthors);
authorsRouter.get('/authors/:author_id', AuthorsController.getOne);
authorsRouter.delete('/authors/:author_id', AuthorsController.delete);
authorsRouter.put('/authors/:author_id', AuthorsController.update);

export default authorsRouter;
