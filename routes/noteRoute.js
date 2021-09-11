const express = require("express");

const router = express.Router();

const Note = require("../models/noteModel");

//Here, we will configure the route to get or send data from the database to the frontend.

router.route("/create").post(function (req, res) {

    const newNote = new Note({ title: req.body.titless, content: req.body.contentss });
    newNote.save();
});

router.route("/notes").get(function (req, res) {
    Note.find().then(function (foundNotes) {
        res.json(foundNotes)
    })
});

module.exports = router;