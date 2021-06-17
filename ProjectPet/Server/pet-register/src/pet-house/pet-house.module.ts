/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetHouseController } from './controller/pet-house.controller';
import { Pet, PetSchema } from './model/pet-house.model';
import { PetHouseRepository } from './repository/pet-house.repository';
import { PetHouseService } from './service/pet-house.service';

@Module({
  controllers: [PetHouseController],
  providers: [PetHouseService,PetHouseRepository],
  imports:[
    MongooseModule.forFeature([{
        name: Pet.name,
        schema: PetSchema,
    }])
  ]
})
export class PetHouseModule {}
