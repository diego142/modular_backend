const fs = require('fs');
let words =     fs.readFileSync('dic_robotics.txt',     'utf-8');

words = words.split('\n');

let i = 1;
for (let word of words){
    ind = word.indexOf(':');
    word = word.slice(0, ind);

    console.log(word);
    i++;
}

