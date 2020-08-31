const express = require('express');
const { getSeeker, addSeeker } = require('../controllers/seeker');

const router = express.Router();

router
  .route('/')
  .get(getSeeker)
  .post(addSeeker);

module.exports = router;
