module.exports = function selectionSort(array) {

    let size = array.length,
        min, i, j;

    if (size < 2) {
        return array;
    }

    for (i = 0; i < size; i++) {

        min = i;

        // check for the minimum
        for (j = i + 1; j < size; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        // if the minimum isn't in the position, swap it
        if (i != min) {
            swap(array, i, min);
        }
    }

    return array;
}


function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}