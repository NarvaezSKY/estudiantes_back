import express  from 'express';
import {Curso,traer1, crear,actualizar,eliminar}  from '../controllers/ApdzControl.js';
const routerApdz = express.Router()



routerApdz.get('/', Curso)
routerApdz.get('/:id', traer1)
routerApdz.put('/:id', actualizar)
routerApdz.post('/', crear)
routerApdz.delete('/:id', eliminar)










export default routerApdz;