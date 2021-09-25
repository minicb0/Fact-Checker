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