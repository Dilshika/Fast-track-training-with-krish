/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { LargestNumberService } from './largest-number.service';

@Controller('largestNumber')
export class LargestNumberController {

    constructor(private service:LargestNumberService){}

  @Post()
  getLargestNumber(@Body('dataArray') dataArray:number[],@Body('value') value: number): Promise<any> {
      return this.service.findNthLargest(dataArray,value)
      .then((data)=>{
        return data;
      })
      .catch(
          (error)=>{
              throw new Error(error);
            });
  }
  
}
