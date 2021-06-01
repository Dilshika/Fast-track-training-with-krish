 const anagram = (word1, word2) => {
     let isFound = false;
     if (word1.length !== word2.length) {
         return false;
     } else {
         //checks for word1's characters are present in word2
         for (k = 0; k < word1.length; k++) {
             for (i = 0; i < word2.length; i++) {
                 if (word1.charAt(k) === word2.charAt(i)) {
                     isFound = true;
                     //once found we don't need to recheck it
                     word2 = word2.replace(word2.charAt(i), '');
                     break;
                 } else {
                     isFound = false;
                 }
             }
             if (!isFound) {
                 break;
             }
         }

     }
     return isFound;
 }

 module.exports = { anagram }