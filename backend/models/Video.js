const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: String,
    author: String,
}, { timestamps: true });

const VideoSchema = new mongoose.Schema({
    name: String,
    date: String,
    views: Number,
    thumbnailUrl: String,
    videoUrl: String,
    likes: Number,
    comments: [CommentSchema],
}, { timestamps: true });

module.exports = mongoose.model('Video', VideoSchema,'videosCollection');

