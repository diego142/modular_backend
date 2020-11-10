const Branch = require('../database/branch');
const Response = require('../models/response');
const { request } = require('express');

const BranchCtrl = {};

BranchCtrl.getAll = (req, res) => {
    Branch.find({})
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

BranchCtrl.getById = (req, res) => {
    const id = req.params.id;

    Branch.findOne({ _id: id })
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

BranchCtrl.create = (req, res) => {
    const branch = new Branch(req.body);

    branch.save()
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

BranchCtrl.update = (req, res) => {
    const id = req.body._id;
    const branch = req.body;

    Branch.findByIdAndUpdate(id, { $set: branch })
        .then(result => {
            res.json(new Response(branch, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

BranchCtrl.delete = (req, res) => {
    const id = req.params.id;

    Branch.findOneAndDelete({ _id: id })
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

module.exports = BranchCtrl;
