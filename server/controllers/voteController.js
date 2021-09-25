const Vote = require('../models/vote')
const Post = require('../models/post')
const crypto = require('crypto')
exports.votePost = async(req, res) => {
    try {
        const postId = req.params.id
        if (postId) {
            const { rating, comment } = req.body
            const voteId = crypto.randomBytes(64).toString('hex')
            const newVote = new Vote()
            newVote._id = voteId
                // vote.JournalistId = 
            newVote.postId = postId
            newVote.rating = rating
            newVote.comment = comment
            await newVote.save()
            let post = await Post.findById(postId)
            let votesCasted = post.votes
            votesCasted.unshift(voteId)
            await Vote.updateOne({ _id: postId }, { votes: votesCasted })
            res.status(201).json({
                message: 'vote casted successfully'
            })
        } else {
            res.status(404).json({
                message: 'postId not found'
            })
        }

    } catch (err) {
        res.status(500).json({
            message: 'Server error'
        })
    }
}