import { getRepository } from "typeorm";
import { Ciclo } from "../entity/Ciclo";
import { Request, Response } from "express";

export const getCiclos = async (req: Request, res: Response) => {
	const ciclos = await getRepository(Ciclo).find();
	return res.json(ciclos);
};

export const createCiclo = async (req: Request, res: Response) => {
	const newCiclo = getRepository(Ciclo).create(req.body);
	const result = await getRepository(Ciclo).save(newCiclo);
	return res.json(result);
};

export const updateCiclo = async (req: Request, res: Response) => {
	const ciclo = await getRepository(Ciclo).findOne(req.params.id);
	if (ciclo) {
		getRepository(Ciclo).merge(ciclo, req.body);
		const result = await getRepository(Ciclo).save(ciclo);
		return res.json(result);
	}
	return res.status(404).json({ msg: "No se encontro el ciclo" });
};

export const findCiclo = async (req: Request, res: Response) => {
	const ciclo = await getRepository(Ciclo).findOne(req.params.id);
	return res.json(ciclo);
};

export const deleteCiclo = async (req: Request, res: Response) => {
	const ciclos = await getRepository(Ciclo).delete(req.params.id);
	return res.json();
};
