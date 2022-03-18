import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToOne,
	JoinColumn,
} from "typeorm";
import { Modulos } from "./Modulos";

@Entity()
export class Examen {
	@PrimaryGeneratedColumn() //Declarar clave autoincremental de la tabla
	id: number;

	@Column({ length: 100 }) //se puede declara un tipo especifico de dato entre los parentisis. Tambien agregar tamaños.
	nombre: string;

	@OneToOne((type) => Modulos, (modulo) => modulo.examen)
	@JoinColumn()
	modulo: Modulos;
}
