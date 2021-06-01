 const linearSearch = (array, value) => {
     const size = array.length;
     let i = 0;
     let isFound = false;

     while (!isFound && i < size) {
         if (value === array[i]) {
             isFound = true;
             return (`${value} value found at: ${i}`);
         } else {
             i++;
         }
     }

     if (!isFound) {
         return ('Value not found.')
     }


 }

 module.exports = { linearSearch }