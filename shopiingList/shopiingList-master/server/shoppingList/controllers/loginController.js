var Register = require('../models/user');
var async = require('async');


//validate-user

exports.userValidate = function(req, res, next){
    res.send('user-validation need to implement');
}



//user-registration
exports.UserRegister =  async (req, res, next) => {
    //res.send('register yet to implement');
    let register_usrname = req.body.username;
    let register_password = req.body.password;
    let register_email    = req.body.email;
    

    if((register_email && register_usrname) == ''){
        console.log('credential are not available');
        res.send({'status':'pls provide user details'});
    }else{

     let findUser = await Register.findOne({"username": register_usrname, "email": register_email});
     if(findUser){ return res.send({"status": "user already exists"});}

     //create uesr object instance.

     let user = new Register({
        username: register_usrname,
        password: register_password,
        email:  register_email
    });

    user.save(function(err, saved){
        if(err){ return next(err)}
        if(saved){ 
            return res.send({"status": "user registered successfully"});
        }
        else{
            return res.send({"status": "user not registered"});
        }
    })
    }
}

