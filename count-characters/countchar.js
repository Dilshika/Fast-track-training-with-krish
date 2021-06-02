const countChar = (sentence) => {
    //create map to store counteach character
    const resultMap = new Map();

    for (const character of sentence) {

        if (!resultMap.has(character)) {
            const count = 1;
            resultMap.set(character, count);
        } else {
            let existCount = resultMap.get(character)
            resultMap.set(character, existCount + 1);
        }

    }
    return resultMap;

}

module.exports = { countChar }