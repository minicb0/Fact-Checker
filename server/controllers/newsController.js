const Post = require('../models/post')

exports.createNews = async(req, res) => {
    try {
        const { title, content } = req.body
        const newPost = new Post()
        newPost.title = title
        newPost.content = content

        await newPost.save()
        res.status(201).json({
            message: 'News posted successfully'
        })
    } catch (err) {
        res.status(500).json({
            message: 'Server error'
        })
    }

}
exports.renderNews = async(req, res) => {
    try {
        const postId = req.params.id
        console.log(postId)
        const postDetails = await Post.findById(postId)
        console.log(postDetails)
        if (postDetails) {
            res.status(200).json({
                data: postDetails
            })
        } else {
            res.status(404).json({
                message: "postId not found"
            })
        }

    } catch (err) {
        res.status(500).json({
            message: 'Server error'
        })
    }
}
exports.closedNews = async(req, res) => {
    try {
        const closedPosts = await Post.find({ status: { $in: ['verified', 'fake'] } })
            .populate('clientId', '-password')
            .populate('assignedJournalists', '-password')
            .populate('votes')
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
        const activePosts = await Post.find({ status: "active" })
        res.status(200).json({
            posts: activePosts
        })
    } catch (error) {
        res.status(500).json({
            message: "server error"
        })
    }
}