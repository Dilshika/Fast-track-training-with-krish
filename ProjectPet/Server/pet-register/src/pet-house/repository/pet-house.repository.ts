/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDetails } from '../dto/pet-create.dto';
import { UpdatePetDetails } from '../dto/pet-update.dto';
import { Pet, PetDocument } from '../model/pet-house.model';

@Injectable()
export class PetHouseRepository {
    constructor(@InjectModel(Pet.name) private petModel:Model<PetDocument>){}

    async create(petDto:CreatePetDetails):Promise<Pet>{
        const petDetails=await new this.petModel(petDto);
        return petDetails.save();

    }

    async read():Promise<Pet[]>{
        const allPets=await this.petModel.find().exec();
        return allPets;
    }

    async update(id:string,petDto:UpdatePetDetails):Promise<Pet>{
        const updatePet=await this.petModel.findByIdAndUpdate(id,petDto);
        return updatePet;
    }

    async delete(id:string):Promise<Pet>{
        const deletePet=this.petModel.findByIdAndDelete(id);
        return deletePet;
    }
}
