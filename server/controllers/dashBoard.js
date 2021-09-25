const Posts = require('../models/post')

exports.verifiedPost = async(req, res) => {
    try {
        const verifiedPosts = await Posts.find({ Status: 'verified' })
        res.status(200).json({
            posts: verifiedPosts
        })
    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}