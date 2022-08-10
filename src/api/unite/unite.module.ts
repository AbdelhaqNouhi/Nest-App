import { Module } from '@nestjs/common';
import { UniteController } from './unite.controller';
import { UniteService } from './unite.service';

@Module({
  controllers: [UniteController],
  providers: [UniteService]
})
export class UniteModule {}
