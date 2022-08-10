import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Utilisateur } from './Utilisateur.entity';

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

  @OneToMany(() => Utilisateur, utilisateur => utilisateur.user)
  utilisateur: Utilisateur
}
