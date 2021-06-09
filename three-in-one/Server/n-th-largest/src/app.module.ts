import { Module } from '@nestjs/common';
import { LargestNumberModule } from './largest-number/largest-number.module';

@Module({
  imports: [LargestNumberModule],
})
export class AppModule {}
