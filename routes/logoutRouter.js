const express = require('express');
const router = express.Router();
const {logoutGetController} = require('./../controllers/logoutController')
router.get('/logout',logoutGetController );

module.exports = router