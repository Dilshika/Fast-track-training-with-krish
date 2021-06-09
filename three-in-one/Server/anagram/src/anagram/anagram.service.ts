/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnagramService {

     firstWord:string;
     secondWord:string;
    

     checkIfAnagram = (firstWord:string,secondWord:string,callback) => {
        let isFound=false;
        //console.log(this.firstWord,this.secondWord);
        if(firstWord.length !== secondWord.length){
             isFound=false;
        }else{
            const wordMap=new Map();
            let count=0;
            
            for(const character of firstWord){
                wordMap.set(character,count++);
            }

            for(const character of secondWord){
                if(wordMap.has(character)){
                    isFound=true;
                }else{
                    isFound=false;
                    break;
                }
            }
        }
        return callback(isFound);
    }

    getResponse(isFound:boolean){
        if(isFound){
            return true;
        }
        else{
            return false;
        }
    }
    
    


}
