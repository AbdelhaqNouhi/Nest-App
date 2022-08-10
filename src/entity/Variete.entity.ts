import { Parcelle } from './Parcelle.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Variete {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nom: string;

    @Column()
    Code: string;

    @OneToMany(() => Parcelle, parcelle => parcelle.variete)
    parcelle: Parcelle[];
}