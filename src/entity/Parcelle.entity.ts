import { SectionDetail } from './SectionDetail.entity';
import { Variete } from './Variete.entity';
import { Bloc } from './Bloc.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Parcelle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nom: string;

    @Column()
    Surface: number;

    @Column()
    DatePlant: Date;

    @Column()
    NbreArbres: number;

    @Column()
    Densite: number;

    @Column()
    Ecartement: number;

    @Column()
    PorteGreffe: string;

    @ManyToOne(() => Bloc, bloc => bloc.parcelle)
    bloc: Bloc

    @ManyToOne(() => Variete, variete => variete.parcelle)
    variete: Variete

    @OneToMany(() => SectionDetail, sectionDetail => sectionDetail.parcelle)
    sectionDetail: SectionDetail
}