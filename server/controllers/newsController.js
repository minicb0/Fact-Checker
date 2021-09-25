const Posts = require('../models/post')

exports.closedNews = async(req, res) => {
    try {
        const closedPosts = await Posts.find({ status: { $in: ['verified', 'fake'] } })
        res.status(200).json({
            posts: closedPosts
        })
    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}
exports.activeNews = async(req, res) => {
    try {
        const activePosts = await Posts.find({ status: "active" })
        res.status(200).json({
            posts: activePosts
        })
    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}