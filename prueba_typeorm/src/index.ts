import "reflect-metadata";
import { createConnection } from "typeorm";
import { Examen } from "./entity/Examen";
import * as express from "express";
/**https://www.youtube.com/watch?v=pCxL1sdjeCc&t=899s*/
createConnection()
	.then(async (connection) => {
		const exam_repository = connection.getRepository(Examen);
		const app = express();
		app.listen(8000);
		app.use(express.json());
		const PORT = 8000;
		app.get("/examenes", async (req, res) => {
			res.json(await exam_repository.find());
		});
		app.post("/crear", async (req, res) => {
			let examen = new Examen();
			examen.nombre = req.body.nombre;
			res.send(await exam_repository.save(examen));
		});
	})
	.catch((error) => console.log(error));