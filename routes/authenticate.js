const express = require('express'),
      router = express.Router(),
      User = require('../models/users.js'),
      passport = require('../config/passport.js');


// Register Route
router.post('/register', function(req, res) {
  console.log(req.body);
  var newUser = new User(req.body);

  console.log(newUser);
  newUser.save(function(err, doc) {
    if(err) {
      res.send({state: 'failure', user: null, message: err});
    } else {
      res.send({state: 'success', user: null, message: "User Created!"});
    }
  });
});


// Login Route
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.send({state: 'failure', user: null, message: err }); }
    if (!user) { return res.send({state: 'failure', user: null, message: "Invalid Login" }); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send({state: 'success', user: user, message: "" });
    });
  })(req, res, next);
});


module.exports = router;
