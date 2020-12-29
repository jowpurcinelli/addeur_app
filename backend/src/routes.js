import { Router } from 'express';
import multer from 'multer';

import CostumerController from './app/controllers/UserController';

const routes = Router();
const upload = multer();

// carrier routes
routes.get('/carrier', CarrierController.index);
routes.get('/carrier/:id', CarrierController.show);
routes.post('/carrier', upload.array('images'), CarrierController.create);

// costumer routes
routes.get('/costumers', CostumerController.index);
routes.get('', CostumerController.index);
routes.post('', upload.array('images'), CostumerController.create);

export default routes;
