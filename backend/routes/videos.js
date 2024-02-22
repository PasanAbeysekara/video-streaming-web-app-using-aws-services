const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

// Get all videos
router.get('/', async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Increment likes for a video
router.patch('/:id/like', async (req, res) => {
    try {
        const video = await Video.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
        res.json(video);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a comment to a video
router.patch('/:id/comment', async (req, res) => {
    try {
        const { text, author } = req.body;
        const video = await Video.findByIdAndUpdate(req.params.id, {
            $push: { comments: { text, author } }
        }, { new: true });
        res.json(video);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
