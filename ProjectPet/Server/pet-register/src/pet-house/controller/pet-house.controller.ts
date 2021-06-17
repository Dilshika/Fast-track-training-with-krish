/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CreatePetDetails } from '../dto/pet-create.dto';
import { UpdatePetDetails } from '../dto/pet-update.dto';
import { PetHouseService } from '../service/pet-house.service';

@Controller('pet-house')
export class PetHouseController {
  constructor(private service:PetHouseService){}
  @Get()
  async getPet(@Res() response) {
    try{
      const pet= await this.service.getPets();
      if(!pet.length){
        response.status(204).send('No Content')
      }
      return response.status(200).json({
        message:'Found',
        pet
      })
      

    }
    catch(error){
      return response.status(404).json({message:error});
    }
   
  }

  @Post()
  async savePet(@Body() pet:CreatePetDetails,@Res() response) {
    try{
      const newPet= await this.service.createPet(pet);
      return response.status(201).json(
        {message:'Pet Created Successfully'})
        
    }
    catch(error){
      return response.status(406).json({message:error});
    }
  }

  @Put(':id')
  async updatePet(@Body() pet:UpdatePetDetails,@Res() response,@Param('id') id:string) {
    try{
      const updatePet=await this.service.updatePet(id,pet);
      return response.status(202).json({
        message:'Updated Successfully'
      });
      
      
    }
    catch(error){
      return response.status(404).json({message:error});
    }
  }

  @Delete(':id')
  async deletePet(@Param('id') id:string,@Res() response) {
    try{
    const deletePet=await this.service.deletePet(id);
    if(!deletePet){
      return response.status(404).json({
        message:'Pet Not Found'
      });
    }else{
      return response.status(202).json({
        message:'Deleted Successfully'
      });
    }
      
    
    }catch(error){
      return response.status(404).json({message:error});
    }
  }
}
