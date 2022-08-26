import {Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn,} from 'typeorm';
import { Unite } from './Unite.entity';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    Nom: string;

    @Column()
    Prenom: string;

    @Column()
    CIN: string;

    @Column()
    DateNaissance: Date;

    @Column()
    CNSS: string;


    @ManyToOne(() => Unite, (unite) => unite.employees)
    unite: Unite;
    
    @ManyToOne(() => Employee, (employee) => employee.id)
    super_id: number;
}