import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	JoinColumn,
} from "typeorm";
import { Alumno } from "./Alumno";
import { Modulos } from "./Modulos";

@Entity()
export class Ciclo {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@OneToMany((type) => Alumno, (alumno) => alumno.ciclo, { cascade: true })
	@JoinColumn({ name: "id" })
	alumnos: Alumno[];

	@OneToMany((type) => Modulos, (modulo) => modulo.ciclo, { cascade: true })
	@JoinColumn({ name: "id" })
	modulos: Modulos[];
}
