module.exports = function findMiss(sequence) {
    let cloneSequence = [...sequence];
    let isFound = false;

    for (let i = 0; i < sequence.length; i++) {

        for (let j = 0; j < cloneSequence.length; j++) {

            if (sequence[i] !== 1) {
                if (sequence[i] - 1 === cloneSequence[j]) {
                    isFound = true;
                    //console.log(isFound, sequence[i]);
                    break;
                } else {
                    isFound = false;
                }
            } else {
                isFound = true;
            }
        }

        if (!isFound) {
            let miss = sequence[i] - 1;
            console.log('Missing One is:' + miss);
        }

    }



}