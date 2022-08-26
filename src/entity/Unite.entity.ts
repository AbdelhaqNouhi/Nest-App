import { Producteur } from './Producteur.entity';
import { Bloc } from './Bloc.entity';
import { Employee } from './Employee.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Unite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  CodeUnite: string;

  @Column()
  Nom: string;

  @ManyToOne(() => Producteur, producteur => producteur.unite)
  producteur: Producteur

  @OneToMany(() => Bloc, bloc => bloc.unite)
  bloc: Bloc[];

  @OneToMany(() => Employee, (employee) => employee.unite)
  employees: Employee[];
}
