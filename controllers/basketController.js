const basketGetController = (req, res) => {
    if (req.session.logged_in) {
        res.render('basket', {
            basket: JSON.parse(req.session.products)
        })
    } else {
        res.redirect('/login');
    }

}
module.exports = basketGetController