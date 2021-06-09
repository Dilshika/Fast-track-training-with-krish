import { Module } from '@nestjs/common';
import { CountOccuranceModule } from './count-occurance/count-occurance.module';

@Module({
  imports: [CountOccuranceModule],
})
export class AppModule {}
