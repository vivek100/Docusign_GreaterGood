const express = require('express');
const { openSigningCeremonyController } = require('../controllers/certi');

const router = express.Router();

router
  .route('/')
  .post(openSigningCeremonyController);

module.exports = router;
