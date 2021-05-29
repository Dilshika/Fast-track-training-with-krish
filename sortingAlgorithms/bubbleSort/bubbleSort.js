module.exports = function bubbleSort(array) {
    let size = array.length;

    if (size < 2) {
        return array;
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < (size - i) - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);

            }
        }
    }

    return array;
}

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}