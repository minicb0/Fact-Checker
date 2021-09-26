const express = require('express');
const { createNews, closedNews, activeNews } = require('../controllers/newsController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.get('/dashboard/closed', closedNews)
router.get('/dashboard/active', verifyToken, activeNews)
router.post('/createNews', verifyToken, createNews)


module.exports = router;