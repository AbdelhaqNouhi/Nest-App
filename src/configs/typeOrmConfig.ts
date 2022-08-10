import { Utilisateur } from './../entity/Utilisateur.entity';
import { Variete } from './../entity/Variete.entity';
import { Unite } from './../entity/Unite.entity';
import { SectionDetail } from './../entity/SectionDetail.entity';
import { Section } from './../entity/Section.entity';
import { Producteur } from './../entity/Producteur.entity';
import { Parcelle } from './../entity/Parcelle.entity';
import { Campagne } from './../entity/Campagne.entity';
import { Bloc } from './../entity/Bloc.entity';
import { User } from './../entity/User.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'nest_api',
    entities: [User, Bloc, Campagne, Parcelle, Producteur, Section, SectionDetail, Unite, Variete, Utilisateur],
    synchronize: true
}