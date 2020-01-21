const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')
const keys = require('../config/keys')

//this loads the users table. we do it this way so if we test things it might not continuously load and provide an error
const User = mongoose.model('users')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken)
    // this creates a new model instance and saves it to the database
    new User({ googleId: profile.Id }).save()
}));
