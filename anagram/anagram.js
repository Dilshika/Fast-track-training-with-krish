module.exports = function anagram(word1, word2) {
    if (word1.length !== word2.length) {
        console.log('Is Not a anagram')
    } else {
        let isFound = true;
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

        if (isFound) {
            console.log('Is a anagram');
        } else {
            console.log('Not a anagaram')
        }


    }
}