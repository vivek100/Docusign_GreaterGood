const express = require('express');
const { getUser, updateUser } = require('/app/controllers/user.js');

const router = express.Router();

router
  .route('/')
  .get(getUser)
  .post(updateUser);

module.exports = router;
