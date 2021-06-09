import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnagramModule } from './anagram/anagram.module';

@Module({
  imports: [AnagramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
