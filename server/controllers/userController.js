//const User = require('../models/user');

exports.createUser = async(req, res) => {
    return res.status(200).json({
        message: 'success',
    });
}