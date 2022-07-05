const express = require('express');

const splitController = require('./helpers/test');

const router = express.Router();

router.post('/lannister-pay/calculate', splitController.calculateSplit);

module.exports = router;