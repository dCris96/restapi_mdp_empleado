import { Router } from "express";
import { getEmpleados, getEmpleado, createEmpleado, updateEmpleado, deleteEmpleado } from "../controllers/empleado.controller.js";

const router = Router()

router.get('/empleado', getEmpleados)

router.get('/empleado/:id', getEmpleado)

router.post('/empleado', createEmpleado)

router.patch('/empleado/:id', updateEmpleado)

router.delete('/empleado/:id', deleteEmpleado)

export default router;