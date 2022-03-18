import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToMany,
	ManyToOne,
} from "typeorm";

import { Examen } from "./Examen";
import { Ciclo } from "./Ciclo";

@Entity()
export class Alumno {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@Column({ default: "" })
	apellidos: string;

	@Column()
	edad: number;

	@ManyToOne((type) => Ciclo, (ciclo) => ciclo.alumnos)
	ciclo: Ciclo;
}
