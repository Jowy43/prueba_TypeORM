import { Router } from "express";
import {
	agregarModulo,
	crearExamen,
	getExamenes,
} from "../controllers/examen.controller";

const router = Router();
router.post("/examen", crearExamen);
router.put("/agregarModuloExamen", agregarModulo);
router.get("/examen", getExamenes);

export default router;
