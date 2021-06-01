 const selectionSort = (array) => {

     const size = array.length;
     let min;

     if (size < 2) {
         return array;
     }

     for (let index = 0; index < size; index++) {

         minIndex = index;

         // check for the minimum
         for (let currentIndex = index + 1; currentIndex < size; currentIndex++) {
             if (array[currentIndex] < array[minIndex]) {
                 minIndex = currentIndex;
             }
         }

         // if the minimum isn't in the position, swap it
         if (index != minIndex) {
             swap(array, index, minIndex);
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