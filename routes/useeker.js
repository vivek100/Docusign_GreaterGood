const express = require('express');
const { updateSeeker, assignSeeker } = require('../controllers/useeker');

const router = express.Router();

router
  .route('/')
  .get(updateSeeker)
  .post(assignSeeker);

module.exports = router;
