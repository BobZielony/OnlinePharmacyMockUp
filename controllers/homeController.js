const homeModel = require('./../models/homeModel')

const homeGetController = (req, res) => {
    if (req.session.logged_in) {
        homeModel(req, res);
    } else {
        res.redirect('/login');
    }
}
module.exports = {
    homeGetController
}