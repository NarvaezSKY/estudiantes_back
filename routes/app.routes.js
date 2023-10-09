import express  from 'express';
import {Curso,traer1, crear,actualizar,eliminar}  from '../controllers/control.js';
const router = express.Router()



router.get('/', Curso)
router.get('/:id', traer1)
router.put('/:id', actualizar)
router.post('/', crear)
router.delete('/:id', eliminar)










export default router;