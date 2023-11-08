const express = require('express');
const connection = require('./../db');
const router = express.Router();
const redirectHandler = require('./utils/card/redirectHandler')

router.post('/card', (req, res) => {

    const gowno = req.body.stringElement;
    connection.query(
        'SELECT * FROM products',
        (err, rows) => {
            let product = rows[gowno];
            let cartProducts = [];
            if (req.session.products != undefined) {
                cartProducts = JSON.parse(req.session.products)
                const filtered = cartProducts.filter(e => e.productName === product.productName)

                if (filtered.length > 0) {
                    console.log("gowno")
                    res.send('ok');
                } else {

                    cartProducts.push(product);
                    console.log(cartProducts);
                    req.session.products = JSON.stringify(cartProducts)
                    console.log(req.session.products)
                    res.send('ok');
                    
                }

                // console.log(req.session.products);
            } else {
                cartProducts = JSON.stringify([product])
                console.log(cartProducts)
                req.session.products = cartProducts
                res.send('ok');
            }

        }
    )

    // dodac do sesji
})
module.exports = router