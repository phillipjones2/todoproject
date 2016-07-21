const passport = require('passport'),
      passportLocal = require('passport-local').Strategy,
      User = require('../models/users.js'),
      bcrypt = require('bcryptjs');

// passport auth strategy
passport.use(new passportLocal(
  function(signInTerm, password, done) {
    User.findOne({ $or:[{username: signInTerm}, {email: signInTerm}]  }).then(function(user) {
      if(user){
        // if user exists then check password against hash
        bcrypt.compare(password, user.password, function(err, check) {
          if (check) {
            done(null, { id: user.id, username: user.username });
          } else{
            done(null, null);
          }
        });
      } else {
        done(null, null);
      }
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }).then(function(user) {
    done(null, { id: user.id, username: user.username});
  });
});


module.exports = passport;
