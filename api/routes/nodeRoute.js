// Handles HTTP requests for Nodes
const express = require("express");
const router = express.Router();

const Node = require('../models/node.model');

// Gets data of curr node and returns modified fields as JSON
router.get('/', async (req, res) => {
    try {
        const node = await Node.findOne();
        let nodeStatus = node.status;
        switch (nodeStatus) {
            // Untested
            case 0:
               res.json({
                    label: node.label,
                    x: node.x,
                    y: node.y,
                    id: node.id,
                    color: "rgb(198, 196, 192)",
                    size: 0,
                });
               break;
            // Positive
            case 1:
                res.json({
                    label: node.label,
                    x: node.x,
                    y: node.y,
                    id: node.id,
                    color: "rgb(0, 255, 0)",
                    size: 0,
                });
                break;
            // Negative
            case 2:
               res.json({
                    label: node.label,
                    x: node.x,
                    y: node.y,
                    id: node.id,
                    color: "rgb(255, 0, 0)",
                    size: 0,
                });
                break;
           case 3:
                res.json({
                    label: node.label,
                    x: node.x,
                    y: node.y,
                    id: node.id,
                    color: "rgb(226, 117, 30)",
                    size: 0,
                 });
                 break;
         }
    } catch (err) {
        res.json({ message: err});
    }
});

// Adds new node to our database
router.post('/', async (req, res) => {
    const node = new Node({
        label: req.body.label,
        x: req.body.x,
        y: req.body.y,
        id: req.body.id, 
        status: req.body.status,
    });
    try {
        const savedNode = await node.save();
        res.json(savedNode);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;