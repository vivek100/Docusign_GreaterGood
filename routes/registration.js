const express = require('express');
const { getEnvelopeStatus, sendEnvelopeController } = require('../controllers/registration');

const router = express.Router();

router
  .route('/')
  .get(getEnvelopeStatus)
  .post(sendEnvelopeController);

module.exports = router;
