const express = require('express');
const router = express.Router();

const {
    getEnvelopes
} = require('../controllers/envelopes.controller');

router.get('/', getEnvelopes);



module.exports = router;