import express from 'express';
import {iniciocli,altacli, bajacli, modificarcli, mostrarcli,buscarcli} from '../Controllers/clicontroller.js';

const rcli = express.Router();

rcli.get('/cli', iniciocli);

rcli.post('/clialta', altacli);

rcli.delete('/clibaja/:id', bajacli);

rcli.put('/climodifica', modificarcli);

rcli.get('/climostrar', mostrarcli);

rcli.get('/clibuscar/:id', buscarcli);

export {rcli}