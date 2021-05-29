module.exports = function quickSort(array, left, right) {

    if (left >= right) {
        return;
    }

    let index = partition(array, left, right);
    quickSort(array, left, index - 1);
    quickSort(array, index + 1, right);


    return array;
}

function partition(array, left, right) {
    // Taking the last element as the pivot
    let pivotValue = array[right];
    //console.log(pivotValue);
    let pivotIndex = left;
    let i;
    for (i = left; i < right; i++) {

        if (array[i] < pivotValue) {
            // Swapping elements
            swap(array, pivotIndex, i);
            // Moving to next element
            pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    swap(array, right, pivotIndex);

    return pivotIndex;
};

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}