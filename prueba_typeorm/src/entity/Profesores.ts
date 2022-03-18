import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Modulos } from "./Modulos";

@Entity()
export class Profesores {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "varchar", length: 255 })
	nombre: string;

	@ManyToMany((type) => Modulos, (modulo) => modulo.profesores)
	modulos: Modulos[];
}
