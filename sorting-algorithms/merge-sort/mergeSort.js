module.exports = function mergeSort(array) {
    let size = array.length;
    if (size < 2) {
        return array;
    }
    let mid = Math.floor(size / 2);
    let leftArray = array.splice(0, mid);
    let rightArray = array;
    return merge(mergeSort(leftArray), mergeSort(rightArray));
};

function merge(leftArray, rightArray) {
    let sortedArray = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }

    //If still have values
    while (leftArray.length) {
        sortedArray.push(leftArray.shift());
    }

    while (rightArray.length) {
        sortedArray.push(rightArray.shift());
    }

    return sortedArray;
}