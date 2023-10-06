import express  from 'express';
import {Curso,traer1, crear,eliminar}  from '../controllers/control.js';
const router = express.Router()



router.get('/', Curso)
router.get('/:id', traer1)

router.post('/', crear)
router.delete('/:id', eliminar)










export default router;