const selectHandler= (req,res)=>{
    req.session.logged_in = true;                
    res.redirect('/home');
}
const selectHandler2= (req,res)=>{
    console.log("zle hasło");
    res.render('basic');
}
const selectHandler3= (req,res)=>{
    console.log("Nie znaleziono takiego użytkownika!");
    res.render('basic');
}

module.exports = {
    selectHandler,selectHandler2,selectHandler3
}