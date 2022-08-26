import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToMany } from 'typeorm';
import { Operations } from './Operations.entity';
import { Producteur } from './Producteur.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nom: string;

  @Column()
  Prenom: string;
  
  @Column()
  Password: string;
  
  @Column()
  Login: boolean;

  @Column()
  Active: boolean;

  @ManyToMany(() => Producteur)
  @JoinTable()
  producters: Producteur[];

  @OneToMany(() => Operations, (operation) => operation.creatPar)
  operations: Operations[];
}
