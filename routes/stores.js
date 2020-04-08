const express = require('express');
const { getHelp, addHelp } = require('/app/controllers/stores');

const router = express.Router();

router
  .route('/')
  .get(getHelp)
  .post(addHelp);

module.exports = router;
