const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    mail: String,
    Type: {
        type: String,
        enum: ['client', 'journalist']
    },
    isVerified: Boolean
})
module.exports = mongoose.model('User', userSchema)