const fs = require('fs');
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

let word =     fs.readFileSync('dic_robotics.txt',     'utf-8');

word = word.toUpperCase();
word = removeAccents(word);


let arreglo = word.split(' ');

arreglo = arreglo.filter(function(valor, indiceActual, arreglo) {
    let indiceAlBuscar = arreglo.indexOf(valor);
    if (indiceActual === indiceAlBuscar) {
        return true;
    } else {
        return false;
    }
});


console.log(arreglo.join(' '));
