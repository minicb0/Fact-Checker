const express = require('express');
const { createNews, closedNews, activeNews, closeNews } = require('../controllers/newsController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.get('/dashboard/closed', closedNews)
router.get('/dashboard/active', verifyToken, activeNews)
router.post('/createNews', verifyToken, createNews)
router.post('/closeNews', verifyToken, closeNews)

module.exports = router;