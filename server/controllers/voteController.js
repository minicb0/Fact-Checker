const Posts = require('../models/post')
const User = require('../models/user')
const Vote = require('../models/vote')

exports.postVote = async (req, res) => {
    const { JournalistId, postId, rating, comment } = req.body;
    if (!JournalistId || !postId || !rating || !comment) {
        res.status(400).json({
            message: "Required field missing",
        })
    }

    try {
        const vote_doc = await Vote.create({
            JournalistId,
            postId,
            rating,
            comment
        });

        const id = vote_doc._id;

        await Posts.updateOne({ '_id': postId }, { $push: { 'votes': id }});

        return res.status(200).json({
            message: 'Successfully voted !'
        }); 
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal server error!',
            data: err,
        }); 
    }
}