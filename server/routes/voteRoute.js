const express = require('express');
const { postVote } = require('../controllers/voteController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.post('/postVote', verifyToken, postVote);

module.exports = router;