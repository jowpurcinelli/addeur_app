import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

// carrier routes
routes.get('/carrier', CarrierController.index);
routes.get('/carrier/:id', CarrierController.show);
routes.post('/carrier', upload.array('images'), CarrierController.create);

// costumer routes
routes.get('/costumers', CostumerController.index);
routes.get('', CostumerController.index);

// image upload
routes.post('/files', upload.single('file'), FileController.store);

routes.post('', upload.array('images'), CostumerController.create);

export default routes;
