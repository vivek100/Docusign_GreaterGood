const express = require('express');
const { openSigningCeremonyController } = require('../controllers/signwork');

const router = express.Router();

router
  .route('/')
  .post(openSigningCeremonyController);

module.exports = router;
