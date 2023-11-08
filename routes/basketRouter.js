const express = require('express');
const router = express.Router();
const basketGetController = require('./../controllers/basketController')

router.get('/basket', basketGetController);
module.exports = router;