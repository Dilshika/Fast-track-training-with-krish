module.exports = function binarySearch(array, value) {
    let size = array.length;
    let lowerBound = 0;
    let upperBound = size - 1;
    let isFound = false;

    while (!isFound && lowerBound <= upperBound) {
        let mid = Math.floor(lowerBound + (upperBound - lowerBound) / 2);

        if (array[mid] < value) {
            lowerBound = mid + 1;
        }
        if (array[mid] > value) {
            upperBound = mid - 1;
        }
        if (array[mid] === value) {
            console.log(`${value} found at position :${mid}`)
            isFound = true;
        }
    }

    if (!isFound) {
        console.log('Value not found')
    }


}