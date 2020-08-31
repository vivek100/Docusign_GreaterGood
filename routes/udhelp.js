const express = require('express');
const { deleteHelp, updateHelp } = require('../controllers/udhelp');

const router = express.Router();

router
  .route('/')
  .get(deleteHelp)
  .post(updateHelp);

module.exports = router;
