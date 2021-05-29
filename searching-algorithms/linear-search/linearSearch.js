module.exports = function linearSearch(array, value) {
    let size = array.length;
    let i = 0;
    let isFound = false;

    while (!isFound && i < size) {
        if (value === array[i]) {
            console.log(`${value} value found at: ${i}`);
            isFound = true;
        } else {
            i++;
        }
    }

    if (!isFound) {
        console.log('Value not found.')
    }


}