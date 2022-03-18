import { getRepository } from "typeorm";
import { Ciclo } from "../entity/Ciclo";
import { Request, Response } from "express";
import { Modulos } from "../entity/Modulos";

export const crearModulo = async (req: Request, res: Response) => {
	const newModulo = getRepository(Modulos).create(req.body);
	const result = await getRepository(Modulos).save(newModulo);
	res.json(result);
};
/**
 * Con relation mostramos tambien los examenes que existen en cada modulo. Si no tienen muestra null.
 * @param req
 * @param res
 */
export const getModulos = async (req: Request, res: Response) => {
	const modulos = await getRepository(Modulos).find({
		relations: ["examen"],
	});
	res.json(modulos);
};

export const agregarCiclo = async (req: Request, res: Response) => {
	const ciclo = await getRepository(Ciclo).findOne(req.body.idCiclo);
	const modulo = await getRepository(Modulos).findOne(req.body.idModulo);
	modulo.ciclo = ciclo;
	const result = await getRepository(Modulos).save(modulo);
	res.json(result);
};
