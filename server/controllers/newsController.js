const Posts = require('../models/post')
const User = require('../models/user')

exports.closedNews = async(req, res) => {
    try {
        const closedPosts = await Posts.find({ status: { $in: ['closed'] } })
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

exports.createNews = async(req, res) => {
    const {content, title, status} = req.body;

    if (!content || !title || !status) {
        res.status(400).json({
            message: "Required field missing",
        })
    }

    try {
        const post_doc = await Posts.create({
            content,
            title,
            status,
            votes: [],
            clientId: req.user.user_id,
            assignedJournalists: []
        }) 

        return res.status(200).json({
            message: 'Success!',
            data: post_doc
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal server error!',
            data: err,
        });
        
    }

}

exports.closeNews = async(req, res) => {
    const { postId } = req.body;

    try {
        const user_doc = await User.findOne({'_id': req.user.user_id, 'status': 'active'}).lean().exec();

        if(!user_doc) {
            return res.status(400).json({
                message: "invalid operation",
            })
        }

        await Posts.updateOne({ '_id': postId }, { status: 'closed' });

        return res.status(200).json({
            message: 'Updated and closed!',
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal server error!',
            data: err,
        });
    }
}