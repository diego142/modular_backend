const Tag = require('../database/tag');
const User = require('../database/user');
const Response = require('../models/response');
const { request } = require('express');

const TagCtrl = {};

TagCtrl.getAll = (req, res) => {

    Tag.find({}).populate('tags').populate('question')
        .then(async result => {

            try {
                for(let tag of result){
                    let user = await User.findById(tag.question.user);
                    tag.question.user = user;
                }              
                res.json(new Response(result, true, 'success'));

            }catch(err) {
                res.json(new Response(err, false, err.message));
            }
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};


TagCtrl.getByQuestionId = (req, res) => {
    const id = req.params.id;

    Tag.findOne({ question: id }).populate('tags').populate('question')
        .then(result => {
            res.json(new Response(result, true, 'success'));
        }).catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

TagCtrl.create = (req, res) => {
    const tag = new Tag(req.body);

    tag.save()
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

TagCtrl.update = (req, res) => {
    const id = req.body._id;
    const tag = req.body;

    Tag.findByIdAndUpdate(id, { $set: tag })
        .then(resul => {
            res.json(new Response(tag, true, 'success'));
        }).catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

TagCtrl.addTag = (req, res) => {
    const id = req.params.id;
    const branch = req.params.id_branch;

    Tag.findByIdAndUpdate(id, { $push: { tags: branch } })
        .then(result => {
            res.json(new Response(branch, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

TagCtrl.removeTag = (req, res) => {
    const id = req.params.id;
    const branch = req.params.id_branch;

    Tag.findByIdAndUpdate(id, { $pull: { tags: branch } })
        .then(result => {
            res.json(new Response(branch, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

module.exports = TagCtrl;
