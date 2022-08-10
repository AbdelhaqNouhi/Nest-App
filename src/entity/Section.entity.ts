import { Campagne } from './Campagne.entity';
import { SectionDetail } from './SectionDetail.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Section {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Code: string;

    @Column()
    Nom: string;

    @OneToMany(() => SectionDetail, sectionDetail => sectionDetail.section)
    sectionDetail: SectionDetail
    
    @ManyToOne(() => Campagne, campagne => campagne.section)
    campagne: Campagne
}