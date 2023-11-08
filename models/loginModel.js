const {selectHandler,selectHandler2,selectHandler3} = require('./../routes/utils/login/selectHandler')
const connection  = require('./../db');
const bcrypt = require('bcrypt')

const loginSelect = (req, res,name,password) => {
    
    connection.query(
        'SELECT password FROM accounts WHERE name = ?', 
        name,
        (err, rows) => { 
            console.log(rows[0])
            const hashedPassword = rows[0].password;
            if (err) throw err;
            if (rows.length > 0) { 
                if (bcrypt.compareSync(password, hashedPassword)) {
                    selectHandler(req,res)
                }
                else{
                    selectHandler2(req,res)
                }
            }
            else {
                selectHandler3(req,res)
            }
        })
}
module.exports = loginSelect