const express = require('express');
const router = express.Router();

const {
    addEnvelope,
    getEnvelopes
} = require('../controllers/envelopes.controller');

router.get('/', getEnvelopes);
router.post('/', addEnvelope);


module.exports = router;
