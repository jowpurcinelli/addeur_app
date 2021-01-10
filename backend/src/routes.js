import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// carrier routes
routes.get('/carrier', CarrierController.index);
routes.get('/carrier/:id', CarrierController.show);
routes.post('/carrier', upload.array('images'), CarrierController.create);

// costumer routes
routes.get('/costumers', CostumerController.index);
routes.get('', CostumerController.index);

// image upload
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
