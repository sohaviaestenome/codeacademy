const express = require('express');
const router = express.Router();

const {
    addEnvelope,
    getEnvelopes,
    getEnvelopeById,
    updateEnvelope,
    deleteEnvelope,
    transfer
} = require('../controllers/envelopes.controller');

router.get('/', getEnvelopes);
router.post('/', addEnvelope);
router.get("/:id", getEnvelopeById);
router.put("/:id", updateEnvelope);
router.delete("/:id", deleteEnvelope);
router.post('/:fromId/transfer/:toId', transfer);

module.exports = router;
