/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CountOccuranceService } from './count-occurance.service';

@Controller('countOccurance')
export class CountOccuranceController {

    constructor(private service:CountOccuranceService){}

    @Post()
    async getOccurance(@Body('sentence') sentence:string){
        try{
            const resultMap=await this.service.countChar(sentence.toLowerCase().replace(/ /g, ''));
            const result=await this.service.resultArray(resultMap);
            return result; 
    } catch (error) {
            throw new Error(error);
        }
    }
}
