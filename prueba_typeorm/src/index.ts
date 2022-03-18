import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import alumnoRoutes from "./routes/alumno.routes";
import cicloRoutes from "./routes/ciclo.routes";
import moduloRoutes from "./routes/modulos.routes";
import examenRoutes from "./routes/examen.routes";

const app = express();
const conection = createConnection();

//Funciones que se ejecutaran antes de las rutas
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.listen(8080);

//Rutas
app.use(alumnoRoutes, cicloRoutes, moduloRoutes, examenRoutes);
