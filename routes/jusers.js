const express = require('express');
const { getjUsers, updatejUsers } = require('../controllers/jusers.js');

const router = express.Router();

router
  .route('/')
  .get(getjUsers)
  .post(updatejUsers);

module.exports = router;
