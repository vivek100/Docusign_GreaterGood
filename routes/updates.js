const express = require('express');
const {getUsers, updates } = require('../controllers/updates');

const router = express.Router();

router
  .route('/')
  .get(getUsers)
  .post(updates);

module.exports = router;
