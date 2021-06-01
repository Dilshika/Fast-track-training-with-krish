 const findMiss = (sequence) => {
     const cloneSequence = [...sequence];
     let isFound = false;

     for (const element of sequence) {

         for (const cloneElemnt of cloneSequence) {

             if (element !== 1) {
                 if (element - 1 === cloneElemnt) {
                     isFound = true;
                     break;
                 } else {
                     isFound = false;
                 }
             } else {
                 isFound = true;
             }
         }

         if (!isFound) {
             let missedChar = element - 1;
             return ('Missing One is:' + missedChar);
         }

     }



 }

 module.exports = { findMiss }