import { User } from './User.entity';
import { Producteur } from './Producteur.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
    export class Utilisateur {
    @PrimaryGeneratedColumn()
    role: string

    @ManyToOne(() => Producteur, producteur => producteur.utilisateur)
    producteur: Producteur

    @ManyToOne(() => User, user => user.utilisateur)
    user: User
}