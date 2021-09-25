const express = require('express');
const { createUser } = require('../controllers/userController');
const dashboardRouter = require('../controllers/dashBoard')
const router = express.Router();

router.post('/createUser', createUser);
router.get('/dashboard', dashboardRouter);
module.exports = router;