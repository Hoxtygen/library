import { Router } from 'express';
import CategoriesController from '../controllers/categoriesController';

const categoriesRouter = Router();

categoriesRouter.get('/categories', CategoriesController.getAll);
categoriesRouter.get('/categories/:category_id', CategoriesController.getOne);
categoriesRouter.post('/categories', CategoriesController.addNew);
categoriesRouter.delete('/categories/:category_id', CategoriesController.delete);
categoriesRouter.put('/categories/:category_id', CategoriesController.update);
export default categoriesRouter;
