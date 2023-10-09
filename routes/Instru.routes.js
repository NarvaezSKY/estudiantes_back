import express  from 'express';
import {Curso,traer1, crear,actualizar,eliminar}  from '../controllers/InstruControl.js';
const routerInstru = express.Router()



routerInstru.get('/', Curso)
routerInstru.get('/:id', traer1)
routerInstru.put('/:id', actualizar)
routerInstru.post('/', crear)
routerInstru.delete('/:id', eliminar)










export default routerInstru;