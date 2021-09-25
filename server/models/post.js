const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    assignedJournalists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    content: String,
    title: String,
    status: String,
    votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vote'
    }],
    endTime: {
        type: Date
    }

})
module.exports = mongoose.model('Post', postSchema)