const quickSort = (array, left, right) => {

    if (left >= right) {
        return;
    }

    let index = partition(array, left, right);
    quickSort(array, left, index - 1);
    quickSort(array, index + 1, right);

    return array;
}

const partition = (array, left, right) => {
    // Taking the last element as the pivot
    let pivotValue = array[right];
    let pivotIndex = left;

    for (let index = left; index < right; index++) {

        if (array[index] < pivotValue) {
            // Swapping elements
            swap(array, pivotIndex, index);
            // Moving to next element
            pivotIndex++;
        }
    }

    // Putting the pivot value in the middle
    swap(array, right, pivotIndex);

    return pivotIndex;
};

const swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

module.exports = { quickSort }