module.exports = function countChar(sentence) {
    //create map to store counteach character
    const charMap = new Map();
    let key, count = 0;
    for (let i = 0; i < sentence.length; i++) {

        key = sentence.charAt(i);

        //initialize map set character as key
        charMap.set(key, count);
    }

    for (let k = 0; k < sentence.length; k++) {
        key = sentence.charAt(k);
        let existCount = charMap.get(key);
        charMap.set(key, existCount + 1);
    }

    console.log(charMap);
    return charMap;

}