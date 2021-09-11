//jshint esversion:6

const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

app.use(cors());

//express.json() method is use to parse the request coming from the frontend
app.use(express.json());

// connect to mongoose

mongoose.connect("mongodb://localhost:27017/notesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// require route
app.use("/", require("./routes/noteRoute"));

app.listen(3001, function () {
    console.log("Server started on port 3001");
});