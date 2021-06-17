/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreatePetDetails } from '../dto/pet-create.dto';
import { UpdatePetDetails } from '../dto/pet-update.dto';
import { PetHouseRepository } from '../repository/pet-house.repository';

@Injectable()
export class PetHouseService {

    constructor(private repository:PetHouseRepository){}

    async createPet(pet:CreatePetDetails){
        return this.repository.create(pet).catch(
            err=>{
                throw new Error(err);
            }
        );
    }

    async getPets(){
        return this.repository.read().catch(
            err=>{
                throw new Error(err);
            }
        );;
    }

    async updatePet(id:string,pet:UpdatePetDetails){
        return this.repository.update(id,pet).catch(
            err=>{
                throw new Error(err);
            }
        );;
    }

    async deletePet(id:string){
        return this.repository.delete(id).catch(
            err=>{
                throw new Error(err);
            }
        );;
    }
    

}
