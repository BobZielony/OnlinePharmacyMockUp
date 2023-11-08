
const mysql = require('mysql');
const sqlCommand1 = 'CREATE DATABASE IF NOT EXISTS sklep_database';
const sqlCommand2 = 'USE sklep_database';
const sqlCommand3 = `CREATE TABLE IF NOT EXISTS accounts (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(50) UNIQUE NOT NULL,
    password varchar(255),
    email varchar(100) NOT NULL,
    firstName varchar(30) NOT NULL,
    surname varchar(30) NOT NULL,
    address varchar(200) NOT NULL,
    phone int(9) NOT NULL,
    PRIMARY KEY (id))`;


const dbConnection = mysql.createConnection({

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
});
dbConnection.connect((err) => {
    if (err) {
        console.log("Uwaga błąd!\n", err.message);
        return
    }
   
    dbConnection.query(sqlCommand1, (err, result) => {
        if (err) {
            console.log("Uwaga błąd!\n", err.message);
            return
        }
       
        dbConnection.query(sqlCommand2, (err, result) => {
            if (err) {
                console.log("Uwaga błąd!\n", err.message);
                return
            }
            dbConnection.query(sqlCommand3, (err, result) => {
                if (err) {
                    console.log("Uwaga błąd!\n", err.message);
                    return
                }
                
            });
        });
    });
});
module.exports = dbConnection