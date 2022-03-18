import { Response, Request } from "express";
import { getRepository } from "typeorm";
import { Alumno } from "../entity/Alumno";
import { Ciclo } from "../entity/Ciclo";

export const getAlumnos = async (req: Request, res: Response) => {
	const alumnos = await getRepository(Alumno).find();
	return res.json(alumnos);
};

export const createAlumnos = async (req: Request, res: Response) => {
	const newAlumno = getRepository(Alumno).create(req.body);
	const result = await getRepository(Alumno).save(newAlumno);
	res.json(result);
};

export const findAlumnos = async (req: Request, res: Response) => {
	const alumno = await getRepository(Alumno).findOne(req.params.id);
	return res.json(alumno);
};

export const updateAlumnos = async (req: Request, res: Response) => {
	const alumno = await getRepository(Alumno).findOne(req.params.id);
	if (alumno) {
		getRepository(Alumno).merge(alumno, req.body);
		const result = await getRepository(Alumno).save(alumno);
		return res.json(result);
	}
	return res.status(404).json({ msg: "No se encontro el usuario" });
};

export const deleteAlumno = async (req: Request, res: Response) => {
	const result = await getRepository(Alumno).delete(req.params.id);
	res.json(result);
};

export const agregarCiclo = async (req: Request, res: Response) => {
	const ciclo = await getRepository(Ciclo).findOne(req.body.idCiclo);
	const alumno = await getRepository(Alumno).findOne(req.body.idAlumno);
	alumno.ciclo = ciclo;
	const result = await getRepository(Alumno).save(alumno);
	res.json(result);
};
