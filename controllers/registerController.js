const {registerInsert} = require('./../models/registerModel')

const registerGetController = (req, res) => {

    res.render('register', {
        title: 'Registration Page',
        name: '',
        email: '',
        password: ''
    })
}

const registerPostController = (req,res)=>{
    const user ={
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        surname: req.body.surname,
        address: req.body.address,
        phone: req.body.phone
    }
    registerInsert(res,user.name,user.password,user.email,user.firstName,user.surname,user.address,user.phone)
}

module.exports = {
registerGetController,registerPostController
}