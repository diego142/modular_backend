const Response = require('../models/response');
const classifier = require('../NL/classifier');
const Tag = require('../database/tag');
const Branch = require('../database/branch');

const NLCtrl = {};

NLCtrl.getclassification = async (req, res) => {
    const question = req.body;

    const cleaned = classifier.cleanStopWords(question.title);

    let csfs = classifier.getClassifications(cleaned);
    csfs = classifier.cleanClassifications(csfs);
    try {
        branches = await Branch.find({});
        for (let c of csfs) {
            branch = branches.find(branch => branch.name == c.name);
            if (branch) {
                c.ref = branch._id;
            }
        }
        res.json(new Response(csfs, true, 'success'));

    } catch (err) {
        res.json(new Response(err, false, err.message));
    }

};

NLCtrl.getAllQuestions = async (req, res) => {
    const labels = req.body;
    let questions = [];
    try {
        for(let lbl of labels){
            let qt = await Tag.find({ tags: { $in: lbl.ref } }).populate('question').populate('tags');
            questions.push(qt);
        }
        
        res.json(new Response(questions, true, 'success'));
    } catch (err) {
        res.json(new Response(err, false, err.message));
    }
};

NLCtrl.getQuestions = async (req, res) => {
    const ref = req.params.ref;

    try {
        const qt = await Tag.find({ tags: { $in: ref } }).populate('question').populate('tags');
        res.json(new Response(qt, true, 'success'));
    } catch (err) {
        res.json(new Response(err, false, err.message));
    }
};

NLCtrl.addNewWord = async (req, res) => {
    const branches = req.body.branches;
    let words =  req.body.words;
    words = classifier.cleanStopWords(words);

    try{
        for (const branch of branches) {
            classifier.addNewWord(words, branch);
        }

        res.json(new Response('', true, 'success'));
    }catch(err){
        res.json(new Response(err, false, err.message));
    }

};

module.exports = NLCtrl;
