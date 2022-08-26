import { UserModule } from './api/user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeOrmConfig';
import { VarieteModule } from './api/variete/variete.module';
import { UtilisateurModule } from './api/utilisateur/utilisateur.module';
import { UniteModule } from './api/unite/unite.module';
import { SectionDetailModule } from './api/section-detail/section-detail.module';
import { SectionModule } from './api/section/section.module';
import { ProducteurModule } from './api/producteur/producteur.module';
import { ParcelleModule } from './api/parcelle/parcelle.module';
import { CampagneModule } from './api/campagne/campagne.module';
import { BlocModule } from './api/bloc/bloc.module';
import { EmployeeModule } from './api/employee/employee.module';
import { OperationsModule } from './api/operations/operations.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(typeOrmConfig), BlocModule, CampagneModule, ParcelleModule, ProducteurModule, SectionModule, SectionDetailModule, UniteModule, UtilisateurModule, VarieteModule, EmployeeModule, OperationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
