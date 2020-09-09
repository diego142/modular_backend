const Skill = require('../database/skill');
const Response = require('../models/response');
const { request } = require('express');

const SkillCtrl = {};

SkillCtrl.getAll = (req, res) => {
    Skill.find({}).populate('skills')
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};


SkillCtrl.getByUserId = (req, res) => {
    const id = req.params.id;

    Skill.findOne({ user: id }).populate('skills')
        .then(result => {
            res.json(new Response(result, true, 'success'));
        }).catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

SkillCtrl.create = (req, res) => {
    const skill = new Skill(req.body);

    skill.save()
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

SkillCtrl.update = (req, res) => {
    const id = req.body._id;
    const skill = req.body;

    Skill.findByIdAndUpdate(id, { $set: skill })
        .then(resul => {
            res.json(new Response(skill, true, 'success'));
        }).catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

SkillCtrl.addSkill = (req, res) => {
    const id = req.params.id;
    const branch = req.params.id_branch;

    Skill.findByIdAndUpdate(id, { $push: { skills: branch } })
        .then(result => {
            res.json(new Response(branch, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

SkillCtrl.removeSkill = (req, res) => {
    const id = req.params.id;
    const branch = req.params.id_branch;

    Skill.findByIdAndUpdate(id, { $pull: { skills: branch } })
        .then(result => {
            res.json(new Response(branch, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

module.exports = SkillCtrl;
