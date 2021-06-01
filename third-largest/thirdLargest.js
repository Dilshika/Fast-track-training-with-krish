 const findThirdLargest = (dataArray) => {
     if (dataArray.length < 2) {
         return ("There is no third Largest number");
     } else {
         let count = 0;
         while (count !== 2) {
             const index = findLargest(dataArray);
             dataArray.splice(index, 1);
             count++;
         }
         const index = findLargest(dataArray);
         return ("Third Largest Value is: " + dataArray[index]);
     }
 }

 const findLargest = (dataArray) => {
     let indexofLargest = 0
     for (const index in dataArray) {
         if (dataArray[indexofLargest] < dataArray[index]) {
             indexofLargest = index;
         }
     }

     return indexofLargest;
 }

 module.exports = { findThirdLargest }