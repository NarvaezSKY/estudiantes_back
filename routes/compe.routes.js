import express  from 'express';
import {Curso,traer1, crear,actualizar,eliminar}  from '../controllers/CompetenciaControl.js';
const routerCompete = express.Router()



routerCompete.get('/', Curso)
routerCompete.get('/:id', traer1)
routerCompete.put('/:id', actualizar)
routerCompete.post('/', crear)
routerCompete.delete('/:id', eliminar)










export default routerCompete;