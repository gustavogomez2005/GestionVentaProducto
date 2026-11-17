import express from 'express';
import {bdd} from '../database/conexion.js';
const base = await bdd()

import {rcli} from '../rutas/rutaCliente.js';
import {rprod} from './rutaProducto.js';
import {rvta} from './rutaVentas.js';

const ini = express.Router();
ini.use(rcli);
ini.use(rprod);
ini.use(rvta);

ini.get('/', (pet, resp)=>{
    resp.send('hola')
});

export {ini};