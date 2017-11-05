const User = require('../models/user');

exports.signup = function(req, res, next) {
  // res.send({success:'true'})
  console.log(req.body);
  console.log("reached signup route...");
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({email:email}, function(err, existingUser) {
    if(err) {return next(err)}
    if(existingUser) {
      return res.status(422).send({error:'Email is in use'});
    }
    // create user object
    const user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      if(err) {return next(err)}
      res.json(user);
    });
    //TODO - save user to VAN api
  });
}

// localhost:5000/signup
// post
// {
// 	"email": "test",
// 	"password": 1234
// }

exports.createpolitician = function(req, res, next) {
  // res.send({success:'true'})
  console.log(req.body);
  console.log("reached signup route...");
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const office = req.body.office;
  const federal =req.body.federal;

  User.findOne({email:email}, function(err, existingUser) {
    if(err) {return next(err)}
    if(existingUser) {
      return res.status(422).send({error:'Email is in use'});
    }
    // create user object
    const user = new User({
      email: email,
      password: password,
      name: name,
      office: office,
      federal: federal,
    });
    user.save(function(err) {
      if(err) {return next(err)}
      res.json(user);
    });
    //TODO - save user to VAN api
  });
}

// localhost:5000/createpolitician
// post
// {
//  "name": "John Doe",
//  "email": "johndoe@johndoe.com",
//  "password": 1234,
//  "office": office,
//  "federal": federal
// }

exports.checkuser = function(req, res, next) {
  // res.send({success:'true'})
  const email = req.body.email;
  User.findOne({email:email}, function(err, existingUser) {
    if(err) {return next(err)}
    if(existingUser) {
        // res.send({success:'true'})
      res.send(existingUser);
    }
  });
}

// localhost:5000/checkuser
// post
// {
// 	"email": "test"
// }

exports.findallUsers = function(req, res, next) {
  // res.send({success:'true'})
  User.find(function(err, users){
    if(err){ 
      return next(err); 
    };
    res.send(users);
  });}

// localhost:5000/findall
// get

