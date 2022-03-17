import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Examen {
	@PrimaryGeneratedColumn() //Declarar clave autoincremental de la tabla
	idPregunta: number;
	@Column({ length: 100 }) //se puede declara un tipo especifico de dato entre los parentisis. Tambien agregar tamaños.
	nombre: string;
}
