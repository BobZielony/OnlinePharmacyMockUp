const logoutGetController = (req, res) => {

    req.session.destroy();
    res.render('logout');
}
module.exports = {
    logoutGetController
}