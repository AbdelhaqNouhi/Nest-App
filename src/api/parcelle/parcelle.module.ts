import { Module } from '@nestjs/common';
import { ParcelleController } from './parcelle.controller';
import { ParcelleService } from './parcelle.service';

@Module({
  controllers: [ParcelleController],
  providers: [ParcelleService]
})
export class ParcelleModule {}
