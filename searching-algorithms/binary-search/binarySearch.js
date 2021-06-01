 const binarySearch = (array, value) => {
     const size = array.length;
     let lowerBound = 0;
     let upperBound = size - 1;
     let isFound = false;

     while (!isFound && lowerBound <= upperBound) {
         let mid = Math.floor(lowerBound + (upperBound - lowerBound) / 2);

         if (array[mid] < value) {
             lowerBound = mid + 1;
         }
         if (array[mid] > value) {
             upperBound = mid - 1;
         }
         if (array[mid] === value) {
             isFound = true;
             return (`${value} found at position :${mid}`);
         }
     }

     if (!isFound) {
         return ('Value not found')
     }


 }

 module.exports = { binarySearch }