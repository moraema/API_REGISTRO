import express from 'express';
import { tareaController } from '../controllers/tarea.controller.js';
import { verificarJwt } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/create', verificarJwt, tareaController.create);
router.delete('/delete/:id', verificarJwt, tareaController.deleteUsuario);

export default router;