const isAnagram = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false;
    } else {
        const word1Map = getMap(word1);
        let isFound = false;

        for (const character of word2) {
            if (word1Map.has(character)) { isFound = true } else {
                isFound = false;
                break;
            }
        }
        return isFound;
    }
}

const getMap = (word) => {
    const resultMap = new Map();

    for (const character of word) {
        resultMap.set(character);
    }
    return resultMap;
}

module.exports = { isAnagram }