const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user'); 

// JWT Configuration
const jwtSecret = 'your-secret-key'; // Replace with your own secret key
const jwtExpiresIn = '1h';

passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ where: { username } })
      .then(user => {
        if (!user) return done(null, false, { message: 'Incorrect username.' });
        
        // Compare the password with bcrypt
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: jwtExpiresIn });
            return done(null, { user, token });
          } else {
            return done(null, false, { message: 'Incorrect password.' });
          }
        });
      })
      .catch(err => done(err));
  }
));

passport.serializeUser((user, done) => {
  // Implement user serialization logic here
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Implement user deserialization logic here
  User.findByPk(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});

module.exports = passport;