const express = require('express');
const palindrome = require('./palindrome');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    let array = ['mom', 'civiC', new Date('11-11-11'), 67909, 'Poopy', 'you', 'qqq', {
        id: 101,
        name: 'anna'
    }, new Date('09-11-11'), true];
    const find = palindrome;
    res.send(find.checkPalindrome(array));
})

app.listen(port, () => {
    console.log(`app is listening at pot: ${port}`)
})