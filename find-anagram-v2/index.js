const express = require('express');
const anagram = require('./find-anagram');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    let message
    const word1 = "boss listen".toLowerCase().replace(/ /g, '');
    const word2 = "sobs silent".toLowerCase().replace(/ /g, '');
    const find = anagram;
    find.isAnagram(word1, word2) ? message = "Is a Anagram" : message = "Is not a Anagram";
    res.send(message);
})

app.listen(port, () => {
    console.log(`app is listening at pot: ${port}`)
})