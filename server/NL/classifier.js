const stopwords = require('stopwords').spanish;
const Natural = require('natural');
const PorterStemmerEs = require('../../node_modules/natural/lib/natural/stemmers/porter_stemmer_es');
var path = require('path');
const fs = require('fs');

const classifier = new Natural.BayesClassifier(PorterStemmerEs);

const programming = fs.readFileSync(path.join(__dirname, 'PROGRAMACION.txt'), 'utf-8');
const math = fs.readFileSync(path.join(__dirname, 'MATEMATICAS.txt'), 'utf-8');
const electronics = fs.readFileSync(path.join(__dirname, 'ELECTRONICA.txt'), 'utf-8');
const communications = fs.readFileSync(path.join(__dirname, 'COMUNICACIONES.txt'), 'utf-8');
const systems = fs.readFileSync(path.join(__dirname, 'SISTEMAS.txt'), 'utf-8');
const security = fs.readFileSync(path.join(__dirname, 'SEGURIDAD.txt'), 'utf-8');
const biotechnology = fs.readFileSync(path.join(__dirname, 'BIOTECNOLOGIA.txt'), 'utf-8');
const optics = fs.readFileSync(path.join(__dirname, 'OPTICA.txt'), 'utf-8');
const robotics = fs.readFileSync(path.join(__dirname, 'ROBOTICA.txt'), 'utf-8');

classifier.addDocument(programming, 'PROGRAMACION');
classifier.addDocument(math, 'MATEMATICAS');
classifier.addDocument(electronics, 'ELECTRONICA');
classifier.addDocument(communications, 'COMUNICACIONES');
classifier.addDocument(systems, 'SISTEMAS');
classifier.addDocument(security, 'SEGURIDAD');
classifier.addDocument(biotechnology, 'BIOTECNOLOGIA');
classifier.addDocument(optics, 'OPTICA');
classifier.addDocument(robotics, 'ROBOTICA');

classifier.train();

classifier.addNewWord = (words, branch) => {
    words = words.toUpperCase();
    fs.appendFileSync(path.join(__dirname, `${branch}.txt`), ` ${words}`);
    classifier.addDocument(words, branch);
    classifier.train();
};

classifier.cleanStopWords = (question) => {
    // remove accents
    question = question.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // to lowercase
    question = question.toLowerCase();
    // remove characters
    question = question.replace(/[¿?!¡()<>\[\]"^:;.,]/gi, '');
    // remove stopwords
    question = question.split(' ');
    question = question.filter(word => !stopwords.includes(word));

    return question.join(' ');
};

classifier.cleanClassifications = (classifications) => {
    const csf = classifications[0].value;
    let same = true;
    for (let c of classifications) {
        if (csf != c.value) {
            same = false;
        }
    }

    if (same) return [];

    let csfts = [];

    for (let c of classifications) {
        let br = { name: '', value: 0, ref: '' };
        if (csf == c.value) {
            br.name = c.label;
            br.value = c.value;
            br.ref = '';
            csfts.push(br);
        }
    }
    return csfts;
};

module.exports = classifier;

// classifier.classify(question)
// classifier.getClassifications(question)
