const bubbleSort = (unsortedArray) => {
    const size = unsortedArray.length;

    if (size < 2) {
        return unsortedArray;
    }

    for (let index in unsortedArray) {
        for (let rowIndex = 0; rowIndex < (size - index) - 1; rowIndex++) {
            if (unsortedArray[rowIndex] > unsortedArray[rowIndex + 1]) {
                swap(unsortedArray, rowIndex, rowIndex + 1);

            }
        }
    }

    return unsortedArray;
}
const swap = (unsortedArray, firstIndex, secondIndex) => {
    let temp = unsortedArray[firstIndex];
    unsortedArray[firstIndex] = unsortedArray[secondIndex];
    unsortedArray[secondIndex] = temp;
}


module.exports = { bubbleSort }