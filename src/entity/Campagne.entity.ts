import { Section } from './Section.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity()
export class Campagne {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Libelle: number;

    @Column()
    DateDebut: Date;

    @Column()
    DateFin: Date;

    @Column()
    Status: string;

    @OneToMany(() => Section, section => section.campagne)
    section: Section
}