const Question = require('../database/question');
const Response = require('../models/response');

const QuestionCtrl = {};

QuestionCtrl.getAll = (req, res) => {
    Question.find({}).populate("user").populate('replys.user')
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

QuestionCtrl.getByUserId = (req, res) => {
    const id = req.params.id;

    Question.findOne({ user: id }).populate('user').populate('replys.user')
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

QuestionCtrl.getById = (req, res) => {
    const id = req.params.id;

    Question.findOne({ _id: id }).populate('user').populate('replys.user')
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

QuestionCtrl.create = (req, res) => {
    const question = new Question(req.body);

    question.save()
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

QuestionCtrl.update = (req, res) => {
    const id = req.body._id;
    const question = req.body;

    Question.findByIdAndUpdate(id, { $set: question })
        .then(result => {
            res.json(new Response(question, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

QuestionCtrl.addReply = async(req, res) => {
    const id = req.params.id;
    const reply = req.body;
    
    try{
        await Question.findByIdAndUpdate(id, { $push: { replys: reply } });
        const result = await Question.findOne({ _id: id }).populate('user').populate('replys.user');
        
        res.json(new Response(result, true, 'success'));
    }catch(err){
        res.json(new Response(err, false, err.message));
    }
};

QuestionCtrl.removeReply = (req, res) => {
    const id = req.params.id;
    const reply = req.params.id_reply;

    Question.findByIdAndUpdate(id, { $pull: { replys: { _id: reply } } })
        .then(result => {
            res.json(new Response(reply, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

QuestionCtrl.modifyReply = (req, res) => {
    const id = req.params.id;
    const id_reply = req.body._id;

    const reply = req.body;

    Question.updateOne({'_id': id, 'replys._id': id_reply }, { $set: { 'replys.$': reply} })
        .then(result => {
            res.json(new Response(reply, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};


module.exports = QuestionCtrl;