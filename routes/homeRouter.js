const express = require('express');
const router = express.Router();
const {
    homeGetController
} = require('./../controllers/homeController')
router.get('/home', homeGetController);
module.exports = router;