const express = require('express');
const anagram = require('./anagram');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const word1 = "boss listen";
    const word2 = "sobs silent";
    const find = anagram;
    res.send(find.anagram(word1, word2));
})

app.listen(port, () => {
    console.log(`app is listening at pot: ${port}`)
})