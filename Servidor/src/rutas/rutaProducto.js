import express from 'express';
import {altaprod, bajaprod, inicioprod, modificarprod, mostrarprod, buscarprod} from '../Controllers/prodcontroller.js';

const rprod = express.Router();

rprod.get('/producto', inicioprod);

rprod.post('/productoalta', altaprod);

rprod.delete('/productobaja/:id', bajaprod);

rprod.put('/productomodifica', modificarprod);

rprod.get('/productomostrar', mostrarprod);

rprod.get('/productobuscar/:id', buscarprod);

export {rprod}