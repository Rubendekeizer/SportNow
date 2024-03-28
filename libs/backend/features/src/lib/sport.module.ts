import { Module } from '@nestjs/common';
import { SportController } from './sport/sport.controller';
import { SportService } from './sport/sport.service';

@Module({
  controllers: [SportController],
  providers: [SportService],
  exports: [SportService],
})
export class SportModule {}
