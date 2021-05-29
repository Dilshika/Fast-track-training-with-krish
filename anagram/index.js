const express = require('express');
const anagram = require('./anagram');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    let word1 = "boss listen";
    let word2 = "sobs silent";
    const find = anagram(word1, word2)
    res.send(find);
})

app.listen(port, () => {
    console.log(`app is listening at pot: ${port}`)
})