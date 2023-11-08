const connection  = require('../db');
const bcrypt = require('bcrypt')
const insertHandler = require('./../routes/utils/registration/insertHandler')


const registerInsert = (res,name,password,email,firstName,surname,address,phone) => {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    connection.query(
        'INSERT INTO accounts(name,password,email,firstName,surname,address,phone) VALUES(?,?,?,?,?,?,?)',
        [name,hashedPassword,email,firstName,surname,address,phone],
        (err, result) => {
            if (err) {
                console.log(name)
                res.send("Uwaga! Wystąpił błąd zapisu użytkownika w bazie danych" + err.message);                
            }
            insertHandler(res)    
        })
}
module.exports = {
    registerInsert
}