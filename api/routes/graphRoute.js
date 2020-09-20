// Handles HTTP requests for Nodes
const express = require("express");
const router = express.Router();
const Node = require('../models/node.model');

router.get('/graphRoute', async (req, res) => {
    let nodes = await Node.find();
    res.send(nodes);
});

module.exports = router;