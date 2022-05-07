const express = require('express');
const { get } = require('express/lib/response');
const router = express.Router();

const {
    getTransactions,
    getTransactionById,
    deleteTransaction,
    updateTransaction
} = require('../controllers/transactions.controller');

router.get('/',getTransactions);
router.get('/:id',getTransactionById);
router.delete('/:id',deleteTransaction);
router.put('/:id',updateTransaction);


module.exports = router;