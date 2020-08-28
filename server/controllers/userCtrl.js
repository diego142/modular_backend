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

    User.find({ email: email })
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

UserCtrl.delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndUpdate(id, { $set: { active: false } })
        .then(result => {
            res.json(new Response(result, true, 'success'));
        }).catch(err => {
            res.json(new Response(err, false, err.message));
        });
};


module.exports = UserCtrl;