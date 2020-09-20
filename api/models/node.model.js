// Model for node in graph
const mongoose = require("mongoose");

// schema for graph node
const schema = mongoose.Schema({
    label: String,
    x: Number,
    y: Number,
    id: String, 
    status: Number, // 0 (untested), 1 (tested positive), 2 (negative), 3 (maybe)
});

// create new mongoose model using schema and export
module.exports = mongoose.model("Node", schema);

