const mongoose = require('mongoose')

const voteSchema = new mongoose.Schema({
    JournalistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    rating: {
        type: Number,
    },
    comment: String
})
module.exports = mongoose.model('Vote', voteSchema)