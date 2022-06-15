const express = require('express');
const router = express.Router();

const {
    getUsers,
    getUserId,
    updateUser,
} = require('../controllers/users.controller');

router.get('/', getUsers);
router.get('/:id',getUserId);
router.put('/:id',updateUser);


module.exports = router;