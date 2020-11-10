const stopwords = require('stopwords').spanish;
const Natural = require('natural');
const PorterStemmerEs = require('../../node_modules/natural/lib/natural/stemmers/porter_stemmer_es');
var path = require('path');
const fs = require('fs');

const classifier = new Natural.BayesClassifier(PorterStemmerEs);
var files = fs.readdirSync(__dirname, (err, files) => {
    if (err) {
        onError(err);
        return;
    }
});

for (let file of files) {
    if (file.includes('.txt')) {
        let text = fs.readFileSync(path.join(__dirname, file), 'utf-8');
        classifier.addDocument(text, file.split('.txt')[0]);
    }
}

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

    return question.join(' ').trim();
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
