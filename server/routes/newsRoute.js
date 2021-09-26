const express = require('express');
const { createNews, renderNews, closedNews, activeNews } = require('../controllers/newsController');

const router = express.Router();

router.post('/news/check', createNews);
router.get('/news/:id', renderNews)
router.get('/dashboard/closed', closedNews)
router.get('/dashboard/active', activeNews)

module.exports = router;