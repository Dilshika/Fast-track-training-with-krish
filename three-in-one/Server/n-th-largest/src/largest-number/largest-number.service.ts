import { Injectable } from '@nestjs/common';

@Injectable()
export class LargestNumberService {


     findNthLargest = (dataArray,value) => {

        return new Promise((resolve,reject)=>{
            if (dataArray.length < 1) {
                reject("There is no Largest number");
            } else if(dataArray.length>value) {
                let count = 0;
                while (count <value-1) {
                    const index = this.findLargest(dataArray);
                    dataArray.splice(index, 1);
                    count++;
                }
                const index = this.findLargest(dataArray);
                resolve(dataArray[index]);
            }else{
                reject('Requested value is rejected. Use correct value')
            }
        })
    }
       
   
     findLargest = (dataArray) => {
        let indexofLargest=0;
        for (const index in dataArray) {
            if (dataArray[indexofLargest] < dataArray[index]) {
                indexofLargest = +index;
            }
        }

        return indexofLargest;
  };

  
}
