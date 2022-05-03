const express = require('express');
const router = express.Router();

const {
    addEnvelope,
    getEnvelopes,
    getEnvelopeById,
    updateEnvelope,
    deleteEnvelope
} = require('../controllers/envelopes.controller');

router.get('/', getEnvelopes);
router.post('/', addEnvelope);
router.get("/:id", getEnvelopeById);
router.put("/:id", updateEnvelope);
router.delete("/:id", deleteEnvelope);

module.exports = router;
