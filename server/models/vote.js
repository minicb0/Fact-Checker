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
        min: {
            type: Number,
            min: 1
        },
        max: {
            type: Number,
            max: 5
        },
        comment: String
    }
})
module.exports = mongoose.model('Vote', voteSchema)