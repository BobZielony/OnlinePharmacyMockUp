const basicGetController =(req, res) => {
    res.render('basic');
    const cookies = req.cookies; // zmienna pomocnicza
    for (let property in cookies) {
        if (!cookies.hasOwnProperty(property)) continue; 
        res.cookie(
            property,
            null, 
            {expires: new Date(Date.now())} 
        );
        
    }
}

module.exports ={
    basicGetController
}