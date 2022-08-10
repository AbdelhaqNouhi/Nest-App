import { Section } from './Section.entity';
import { Parcelle } from './Parcelle.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';

@Entity()
export class SectionDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ratio: string;

    @ManyToOne(() => Parcelle, parcelle => parcelle.sectionDetail)
    parcelle: Parcelle

    @ManyToOne(() => Section, section => section.sectionDetail)
    section: Section
}