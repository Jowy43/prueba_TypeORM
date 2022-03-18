import { Router } from "express";
import {
	agregarCiclo,
	crearModulo,
	getModulos,
} from "../controllers/modulo.controller";

const router = Router();
router.post("/modulo", crearModulo);
router.put("/agregarCicloModulo", agregarCiclo);
router.get("/modulo", getModulos);
export default router;
