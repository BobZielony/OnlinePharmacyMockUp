const connection  = require('./../db');

const homeModel = (req,res) =>{
    connection.query(
        'SELECT * FROM products',
        (err,rows)=>{
            res.render('home',{
                rows:rows
            })
        }
    )
}
module.exports = homeModel