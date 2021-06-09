import { Module } from '@nestjs/common';
import { CountOccuranceController } from './count-occurance.controller';
import { CountOccuranceService } from './count-occurance.service';

@Module({
  controllers: [CountOccuranceController],
  providers: [CountOccuranceService],
})
export class CountOccuranceModule {}
