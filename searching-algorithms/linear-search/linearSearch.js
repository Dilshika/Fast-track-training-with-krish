 const linearSearch = (array, value) => {
     const size = array.length;
     let index = 0;
     let isFound = false;

     while (!isFound && index < size) {
         if (value === array[index]) {
             isFound = true;
             return (`${value} value found at: ${index}`);
         } else {
             index++;
         }
     }

     if (!isFound) {
         return ('Value not found.')
     }


 }

 module.exports = { linearSearch }