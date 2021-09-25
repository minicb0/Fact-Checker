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
    } catch {
        res.status(500).json({
            message: 'Server error'
        })
    }

}