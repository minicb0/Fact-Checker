const express = require('express');
const { createNews, renderNews } = require('../controllers/newsController');

const router = express.Router();

router.post('/news/check', createNews);
router.get('/news/:id', renderNews)
module.exports = router;