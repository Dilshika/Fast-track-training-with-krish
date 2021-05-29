module.exports = function thirdLargest(array) {
    let largest;
    if (array.length < 2) {
        console.log("There is no third Largest number");
    } else {
        let i = 0;
        while (i !== 2) {
            let val = findLargest(array);
            array.splice(val, 1);
            i++;
        }
        largest = findLargest(array);
        console.log("Third Largest Value is: " + array[largest]);
    }
}

function findLargest(array1) {
    let size = array1.length;
    let largest = 0
    for (let i = 1; i < size; i++) {
        if (array1[largest] < array1[i]) {
            largest = i;
        }
    }

    return largest;
}