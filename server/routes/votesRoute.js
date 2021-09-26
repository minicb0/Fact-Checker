const express = require('express');
const { votePost } = require('../controllers/voteController');
const router = express.Router();

router.post('/news/vote/:id', votePost)
module.exports = router;