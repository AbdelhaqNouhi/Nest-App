import { Unite } from './Unite.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Producteur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CodeProducteur: string;

  @Column()
  Nom: string;

  @Column()
  Prenom: string;

  @Column()
  Societe: string;

  @Column()
  Tel: string;

  @Column()
  Rc: string;

  @Column()
  Ice: string;

  @Column()
  Active: boolean;

  @OneToMany(() => Unite, unite => unite.producteur)
  unite: Unite[];
}
