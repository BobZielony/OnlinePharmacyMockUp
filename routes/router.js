const express = require('express');
const app = express()
const router = express.Router();
const glowna = require('./homeRouter');
const login = require('./loginRouter');
const register = require('./registerRouter')
const logout = require('./logoutRouter')
const card = require('./cardRouter')
const basket = require('./basketRouter')

const {
    basicGetController
} = require('./../controllers/basicController')


router.use(register);
router.use(login);
router.use(glowna);
router.use(logout);
router.use(card);
router.use(basket);


router.get('/', basicGetController)
router.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})


module.exports = router;