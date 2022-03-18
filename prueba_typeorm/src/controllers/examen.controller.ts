import { createQueryBuilder, getRepository } from "typeorm";
import { Request, Response } from "express";
import { Modulos } from "../entity/Modulos";
import { Examen } from "../entity/Examen";

export const crearExamen = async (req: Request, res: Response) => {
	const newExamen = getRepository(Examen).create(req.body);
	const result = await getRepository(Examen).save(newExamen);
	return res.json(result);
};

/**
 * Con create Query podemos hacer consultas personalizadas que con los métodos del repositorio no podemos hacer.
 * Api: https://typeorm.io/#/select-query-builder/joining-relations
 * @param req
 * @param res
 * @returns
 */
export const getExamenes = async (req: Request, res: Response) => {
	const examenes = await createQueryBuilder("Examen")
		.leftJoinAndSelect("Examen.modulo", "Modulos")
		.getMany();
	return res.json(examenes);
};

export const agregarModulo = async (req: Request, res: Response) => {
	const modulo = await getRepository(Modulos).findOne(req.body.idModulo);
	const examen = await getRepository(Examen).findOne(req.body.idExamen);
	if (modulo) {
		examen.modulo = modulo;
		const result = await getRepository(Examen).save(examen);
		return res.json(result);
	}
	return res.status(404).json({ msg: "No se a encontrado el modulo" });
};
