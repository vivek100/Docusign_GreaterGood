const express = require('express');
const { getUser, updateUser } = require('../../controllers/user');

const router = express.Router();

router
  .route('/')
  .get(getUser)
  .post(updateUser);

module.exports = router;
