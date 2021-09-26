const Vote = require('../models/vote')
const Post = require('../models/post')
const User = require('../models/user')

exports.votePost = async(req, res) => {
    try {
        const postId = req.params.id
        const userId = req.user.user_id
        const { Type } = User.findById(userId)
        if (postId) {
            if (Type === 'journalist') {
                const { rating, comment } = req.body

                const newVote = new Vote()

                newVote.JournalistId = userId
                newVote.postId = postId
                newVote.rating = rating
                newVote.comment = comment
                await newVote.save()

                let post = await Post.findById(postId)
                let votesCasted = await post.votes
                votesCasted.unshift(newVote._id)
                await Vote.updateOne({ _id: postId }, { votes: votesCasted })
                res.status(201).json({
                    message: 'vote casted successfully'
                })
            } else {
                res.status(403).json({
                    message: 'You are not a journalist'
                })
            }

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