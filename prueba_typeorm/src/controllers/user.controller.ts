import { Response, Request } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const getUsers = async (req: Request, res: Response) => {
	const users = await getRepository(User).find();
	return res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
	const newUser = getRepository(User).create(req.body);
	const result = await getRepository(User).save(newUser);
	res.json(result);
};

export const findUser = async (req: Request, res: Response) => {
	const user = await getRepository(User).findOne(req.params.id);
	return res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
	const user = await getRepository(User).findOne(req.params.id);
	if (user) {
		getRepository(User).merge(user, req.body);
		const result = await getRepository(User).save(user);
		return res.json(result);
	}
	return res.status(404).json({ msg: "No se encontro el usuario" });
};

export const deleteUser = async (req: Request, res: Response) => {
	const user = await getRepository(User).findOne(req.params.id);
	console.log(user);
	const result = await getRepository(User).remove(user);
	res.json(result);
};
