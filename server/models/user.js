const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    mail: String,
    Type: {
        type: String,
        enum: ['client', 'journalist']
    },
    isVerified: Boolean
});

// hashing passwords
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next();
});

module.exports = mongoose.model('User', userSchema)