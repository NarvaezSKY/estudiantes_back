import express  from 'express';
import {Curso,traer1, crear,actualizar,eliminar}  from '../controllers/ResulControl.js';
const routerResu = express.Router()



routerResu.get('/', Curso)
routerResu.get('/:id', traer1)
routerResu.put('/:id', actualizar)
routerResu.post('/', crear)
routerResu.delete('/:id', eliminar)










export default routerResu;