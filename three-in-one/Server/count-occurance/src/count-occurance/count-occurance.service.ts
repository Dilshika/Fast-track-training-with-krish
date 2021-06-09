/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CountOccuranceService {

     countChar =  (sentence:string) => {
         const senteceWithoutSpace:string=sentence;
        //create map to store counteach character
        const resultMap = new Map();
    
        for (const character of senteceWithoutSpace) {
    
            if (!resultMap.has(character)) {
                const count = 1;
                 resultMap.set(character, count);
            } else {
                const existCount = resultMap.get(character)
                 resultMap.set(character, existCount + 1);
      }
    
        }
        return resultMap;
    
    }
    

    resultArray(resultMap:Map<string,number>){
        const resultArray: (string | number)[][]=[];
        for (const [key,value] of resultMap.entries()){
            resultArray.push([key,value]);
        }
        return resultArray;
    }

}
