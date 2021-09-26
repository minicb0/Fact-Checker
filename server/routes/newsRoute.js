const express = require('express');
const { createNews, closedNews, userActiveNews, closeNews, addJournalist, ActiveNews } = require('../controllers/newsController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

router.get('/dashboard/closed', closedNews)
router.get('/dashboard/active', verifyToken, userActiveNews)
router.get('/activeNews', verifyToken, ActiveNews)
router.post('/createNews', verifyToken, createNews)
router.post('/closeNews', verifyToken, closeNews)
router.post('/addJournalist', verifyToken, addJournalist)

module.exports = router;