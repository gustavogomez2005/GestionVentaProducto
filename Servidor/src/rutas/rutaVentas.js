import express from 'express';
import {altavta, bajavta, modificarvta, iniciovta, mostrarvta} from '../Controllers/vtacontroller.js';

const rvta = express.Router();

rvta.get('/venta', iniciovta);

rvta.post('/ventaalta', altavta);

rvta.delete('/ventabaja/:id', bajavta);

rvta.put('/ventamodifica', modificarvta);

rvta.get('/ventamostrar', mostrarvta);

export {rvta}