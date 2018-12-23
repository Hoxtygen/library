import { Router } from 'express';
import CategoriesController from '../controllers/categoriesController';

const categoriesRouter = Router();

categoriesRouter.get('/categories', CategoriesController.getAll);
categoriesRouter.get('/categories/:category_id', CategoriesController.getOne);

export default categoriesRouter;
