import { Router } from "express";
import {
	agregarCiclo,
	createAlumnos,
	deleteAlumno,
	findAlumnos,
	getAlumnos,
	updateAlumnos,
} from "../controllers/alumno.controller";
const router = Router();

router.get("/alumnos", getAlumnos);
router.post("/alumnos", createAlumnos);
router.get("/alumnos/:id", findAlumnos);
router.put("/alumnos/:id", updateAlumnos);
router.delete("/alumnos/:id", deleteAlumno);
router.put("agregarCicloAlumno", agregarCiclo);

export default router;
