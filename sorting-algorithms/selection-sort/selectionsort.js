 const selectionSort = (array) => {

     const size = array.length;
     let min;

     if (size < 2) {
         return array;
     }

     for (let i = 0; i < size; i++) {

         min = i;

         // check for the minimum
         for (let j = i + 1; j < size; j++) {
             if (array[j] < array[min]) {
                 min = j;
             }
         }

         // if the minimum isn't in the position, swap it
         if (i != min) {
             swap(array, i, min);
         }
     }

     return array;
 }


 const swap = (array, firstIndex, secondIndex) => {
     let temp = array[firstIndex];
     array[firstIndex] = array[secondIndex];
     array[secondIndex] = temp;
 }

 module.exports = { selectionSort }