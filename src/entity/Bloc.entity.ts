import { Parcelle } from './Parcelle.entity';
import { Unite } from './Unite.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Bloc {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nome: string;

    @ManyToOne(() => Unite, unite => unite.bloc)
    unite: Unite

    @OneToMany(() => Parcelle, parcelle => parcelle.bloc)
    parcelle: Parcelle[];
}