const bubbleSort = (unsortedArray) => {
    const size = unsortedArray.length;

    if (size < 2) {
        return unsortedArray;
    }

    for (let index in unsortedArray) {
        for (let j = 0; j < (size - index) - 1; j++) {
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                swap(unsortedArray, j, j + 1);

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