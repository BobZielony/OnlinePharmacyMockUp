
const express = require('express');
const mysql = require('mysql')
const connection  = require('../db');
const router = express.Router();
const bcrypt = require('bcrypt')
const {registerGetController,registerPostController} = require('./../controllers/registerController')

router.get('/register',registerGetController)
router.post('/register', registerPostController)
module.exports = router