import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnagramService } from './anagram.service';

@Controller('anagram')
export class AnagramController {

    constructor(private service:AnagramService){}

    @Post()
    getResponse(@Body('firstWord') firstWord:string, @Body('secondWord') secondWord:string){
        return this.service.checkIfAnagram(firstWord,secondWord,this.service.getResponse);
    }

   

    
}
