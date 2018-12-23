import { Router } from 'express';
import CategoriesController from '../controllers/categoriesController';

const categoriesRouter = Router();

categoriesRouter.get('/categories', CategoriesController.getAll);

export default categoriesRouter;
