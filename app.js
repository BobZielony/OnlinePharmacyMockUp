const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const router = require('./routes/router')
const cors = require('cors')
const PORT = 8080;
const app = express();
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secter_key',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))

app.use(cors());

app.use('/', router);


app.listen(PORT, function () {
    console.log('Serwer nasłuchuje na porcie', PORT);
});

module.exports = app;
