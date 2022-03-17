import "reflect-metadata";
import { createConnection } from "typeorm";
import { Examen } from "./entity/Examen";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes";

const app = express();
const conection = createConnection();
//Funciones que se ejecutaran antes de las rutas
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.listen(8080);

//Rutas
app.use(userRoutes);

/**https://www.youtube.com/watch?v=pCxL1sdjeCc&t=899s*/
