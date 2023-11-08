

const loginSelect = require('./../models/loginModel')


const loginGetController = (req, res) => {
    res.cookie('date', new Date());
    console.log("req.url: ", req.url, ", req.cookies: ", req.cookies);
    res.render('login', {
        title: 'Login',
        name: '',
        password: ''
    })
}
const loginPostController = (req,res)=>{
    const name = req.body.name;
    console.log("To jest name" + name);
    const password = req.body.password;
    console.log("To jest password" + password);
    loginSelect(req,res,name,password)

}
module.exports = {
loginGetController, loginPostController
}
