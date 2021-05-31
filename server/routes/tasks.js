const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// Fetching all data from db
router.get('/', async (req, resp) => {
    try {
        const allPosts = await Post.find();
        resp.json(allPosts);
    } catch (err) {
        resp.json({ message: err });
    }
});

//Inserting data in db
router.post('/', async (req, resp) => {
    const po = new Post({
        item: req.body.item,
        amount: req.body.amount
    });
    try {
        const savedPost = await po.save();
        resp.json(savedPost);
    } catch (err) {
        resp.json({ message: err });
    }

});

// Deleting specific data from db
router.delete('/:id', async (req, resp) => {
    try {
        const removedPost =await Post.remove({_id: req.params.id});
        resp.json(removedPost);
        
    } catch (err) {
        resp.json({ message: err });
    }
});

module.exports = router;