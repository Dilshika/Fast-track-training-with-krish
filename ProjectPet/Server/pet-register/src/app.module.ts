import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetHouseModule } from './pet-house/pet-house.module';

@Module({
  imports: [
    PetHouseModule,
    MongooseModule.forRoot('mongodb://localhost/pet', {
      useNewUrlParser: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
