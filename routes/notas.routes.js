import express  from 'express';
import {Curso,traer1, crear,actualizar,eliminar}  from '../controllers/Notas.js';
const routerNotas = express.Router()



routerNotas.get('/', Curso)
routerNotas.get('/:id', traer1)
routerNotas.put('/:id', actualizar)
routerNotas.post('/', crear)
routerNotas.delete('/:id', eliminar)










export default routerNotas;