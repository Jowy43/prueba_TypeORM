import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToOne,
	ManyToMany,
	JoinTable,
} from "typeorm";
import { Ciclo } from "./Ciclo";
import { Examen } from "./Examen";
import { Profesores } from "./Profesores";

@Entity()
export class Modulos {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@ManyToOne((type) => Ciclo, (ciclo) => ciclo.modulos)
	ciclo: Ciclo;

	@OneToOne((type) => Examen, (examen) => examen.modulo)
	examen: Examen;

	@ManyToMany((type) => Profesores, (profesor) => profesor.modulos)
	@JoinTable()
	profesores: Profesores[];
}
