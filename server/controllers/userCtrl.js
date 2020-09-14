const User = require('../database/user');
const Response = require('../models/response');

const UserCtrl = {};

UserCtrl.getAll = (req, res) => {
    User.find({ active: true })
        .then(result => {
            res.json(new Response(result, true, 'success'));
        }).catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

UserCtrl.getByEmail = (req, res) => {
    const email = req.params.email;

    User.findOne({ email: email, active: true })
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, ''));
        });
};

UserCtrl.getById = (req, res) => {
    const id = req.params.id;

    User.findOne({_id: id, active: true})
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, ''));
        });
};

UserCtrl.create = (req, res) => {
    const user = new User(req.body);

    user.save()
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

UserCtrl.update = (req, res) => {
    const id = req.body._id;
    const user = req.body;

    User.findByIdAndUpdate(id, { $set: user })
        .then(result => {
            res.json(new Response(user, true, 'success'));
        }).catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

UserCtrl.delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndUpdate(id, { $set: { active: false } })
        .then(result => {
            result.active = false;
            res.json(new Response(result, true, 'success'));
        }).catch(err => {
            res.json(new Response(err, false, err.message));
        });
};


module.exports = UserCtrl;