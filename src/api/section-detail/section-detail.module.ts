import { Module } from '@nestjs/common';
import { SectionDetailController } from './section-detail.controller';
import { SectionDetailService } from './section-detail.service';

@Module({
  controllers: [SectionDetailController],
  providers: [SectionDetailService]
})
export class SectionDetailModule {}
