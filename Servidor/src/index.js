import express from 'express';
import colors from 'colors';
import {puerto} from './config.js';
import cors from 'cors';

const app = express();
app.use(cors())

// uso el json
app.use(express.json());

import {ini} from './rutas/rutaInicio.js';
app.use(ini);

app.listen(puerto, ()=>{
    console.log(`Servidor iniciando en el puerto ${puerto}`.blue);
})
