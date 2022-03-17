import { Router } from "express";
import {
	createUser,
	deleteUser,
	findUser,
	getUsers,
	updateUser,
} from "../controllers/user.controller";
const router = Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", findUser);
router.put("/user/:id", updateUser);
router.delete("/deleteUser:id", deleteUser);

export default router;
