const moment = require("moment");
const palindrome = (array, start, end) => {
    let isMatched = false;
    if (start > end) {
        return;
    }
    if (array[start] === array[end]) {
        isMatched = true;
        palindrome(array, start + 1, end - 1);
    } else {
        isMatched = false;
    }
    return isMatched;
}

const checkPalindrome = (array) => {
    let isPalindrome = false;
    const resultMap = new Map();
    for (const element of array) {
        if (element instanceof Date) {
            const dateObject = moment(element).format('MM DD YY').replace(/ /g, '');
            isPalindrome = palindrome(dateObject, 0, dateObject.length - 1);
            resultMap.set(element, isPalindrome);
        } else {

            switch (typeof(element)) {
                case "number":
                    isPalindrome = palindrome(element.toString(), 0, element.toString().length - 1);
                    resultMap.set(element, isPalindrome);
                    break;
                case "boolean":
                    isPalindrome = palindrome(element.toString(), 0, element.toString().length - 1);
                    resultMap.set(element, isPalindrome);
                    break;
                case "object":
                    isPalindrome = palindrome(element.id.toString(), 0, element.id.toString().length - 1);
                    (isPalindrome) ? isPalindrome = palindrome(element.name.toString(), 0, element.name.toString().length - 1): isPalindrome = false;
                    resultMap.set(element, isPalindrome);
                    break;
                case "string":
                    isPalindrome = palindrome(element, 0, element.length - 1);
                    resultMap.set(element, isPalindrome);
            }
        }

    }

    return resultMap;

}

module.exports = { checkPalindrome }