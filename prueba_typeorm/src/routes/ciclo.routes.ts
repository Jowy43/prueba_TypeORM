import { Router } from "express";
import {
	createCiclo,
	deleteCiclo,
	findCiclo,
	getCiclos,
	updateCiclo,
} from "../controllers/ciclo.controller";

const router = Router();

router.get("/ciclo", getCiclos);
router.post("/ciclo", createCiclo);
router.get("/ciclo/:id", findCiclo);
router.put("/ciclo/:id", updateCiclo);
router.delete("/ciclo/:id", deleteCiclo);

export default router;
