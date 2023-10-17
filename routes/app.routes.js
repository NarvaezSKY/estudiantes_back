import express  from 'express';
import {Curso,traer1, crear,eliminar,actualizar}  from '../controllers/control.js';
const router = express.Router()



router.get('/', Curso)
router.get('/:id', traer1)

router.post('/', crear)
router.delete('/:id', eliminar)
router.put('/:id', actualizar)










export default router;