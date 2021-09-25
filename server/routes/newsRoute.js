const express = require('express');
const { createNews } = require('../controllers/newsController');
const router = express.Router();

router.post('/news/check', createNews);

module.exports = router;