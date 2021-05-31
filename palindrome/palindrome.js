let array = ['mom', 'civiC', new Date('11-11-11'), 67909, 'Poopy', 'you', 'qqq', {
    id: 101,
    name: 'anna'
}, new Date('09-11-11'), true];
let resultMap = new Map();
let isMatched = false;

const palindrome = (array, start, end) => {
    if (start > end) {
        return;
    }
    //console.log(array[start], array[end])
    if (array[start] === array[end]) {
        isMatched = true;
        palindrome(array, start + 1, end - 1);
    } else {
        isMatched = false;
    }

    //console.log(isMatched)
    return isMatched;
}

const checkPalindrome = () => {

    for (ele of array) {
        if (ele instanceof Date) {
            //if array element is type of date
            let day = ele.getDate().toString();
            let month = ((ele.getMonth() + 1) < 10) ? '0' + (ele.getMonth() + 1) : (ele.getMonth() + 1);
            let year = ele.getFullYear().toString().substring(2, 4);
            let string = day + month + year;
            const isPalindrome = palindrome(string, 0, string.length - 1);
            resultMap.set(ele, isPalindrome);
        } else if (typeof(ele) === "number") {
            //if array element is a number
            const isPalindrome = palindrome(ele.toString(), 0, ele.toString().length - 1);
            resultMap.set(ele, isPalindrome);
        } else if (typeof(ele) === "boolean") {
            //if array element is boolean
            const isPalindrome = palindrome(ele.toString(), 0, ele.toString().length - 1);
            resultMap.set(ele, isPalindrome);
        } else if (typeof(ele) === "object") {
            //if array element is object
            let isPalindrome = false;
            isPalindrome = palindrome(ele.id.toString(), 0, ele.id.toString().length - 1);
            if (isPalindrome) {
                isPalindrome = palindrome(ele.name.toString(), 0, ele.name.toString().length - 1);
            }
            resultMap.set(ele, isPalindrome);
        } else {
            //else if array element is a string
            const isPalindrome = palindrome(ele, 0, ele.length - 1);
            resultMap.set(ele, isPalindrome);
        }


    }

    console.log(resultMap);

}

checkPalindrome();