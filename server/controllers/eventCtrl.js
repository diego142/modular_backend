const Event = require('../database/event');
const Response = require('../models/response');

const EventCtrl = {};

EventCtrl.getAll = (req, res) => {
    Event.find({ open: true }).populate("user")
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

EventCtrl.getByUserId = (req, res) => {
    const id = req.params.id;

    Event.find({ user: id })
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

EventCtrl.getById = (req, res) => {
    const id = req.params.id;

    Event.findById(id)
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

EventCtrl.create = (req, res) => {
    const event = new Event(req.body);

    event.save()
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

EventCtrl.update = (req, res) => {
    const id = req.body._id;
    const event = req.body;

    Event.findByIdAndUpdate(id, { $set: event })
        .then(result => {
            res.json(new Response(event, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

EventCtrl.close = (req, res) => {
    const id = req.params.id;

    Event.findByIdAndUpdate(id, { $set: { open: false } })
        .then(result => {
            res.json(new Response(result, true, 'success'));
        })
        .catch(err => {
            res.json(new Response(err, false, err.message));
        });
};

module.exports = EventCtrl;